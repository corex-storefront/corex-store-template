/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
'use strict';

var ErrorUtils = require("fbjs/lib/ErrorUtils");

var RelayReader = require("./RelayReader");

var RelayRecordSource = require("./RelayRecordSource");

var RelayRecordSourceMutator = require("./RelayRecordSourceMutator");

var RelayRecordSourceProxy = require("./RelayRecordSourceProxy");

var RelayRecordSourceSelectorProxy = require("./RelayRecordSourceSelectorProxy");

var invariant = require("fbjs/lib/invariant");
/**
 * Coordinates the concurrent modification of a `Store` due to optimistic and
 * non-revertable client updates and server payloads:
 * - Applies optimistic updates.
 * - Reverts optimistic updates, rebasing any subsequent updates.
 * - Commits client updates (typically for client schema extensions).
 * - Commits server updates:
 *   - Normalizes query/mutation/subscription responses.
 *   - Executes handlers for "handle" fields.
 *   - Reverts and reapplies pending optimistic updates.
 */


var RelayPublishQueue =
/*#__PURE__*/
function () {
  // A "negative" of all applied updaters. It can be published to the store to
  // undo them in order to re-apply some of them for a rebase.
  // True if the next `run()` should apply the backup and rerun all optimistic
  // updates performing a rebase.
  // Payloads to apply or Sources to publish to the store with the next `run()`.
  // Updaters to apply with the next `run()`. These mutate the store and should
  // typically only mutate client schema extensions.
  // Optimistic updaters to add with the next `run()`.
  // Optimistic updaters that are already added and might be rerun in order to
  // rebase them.
  // Garbage collection hold, should rerun gc on dispose
  function RelayPublishQueue(store, handlerProvider, getDataID) {
    this._backup = RelayRecordSource.create();
    this._handlerProvider = handlerProvider || null;
    this._pendingBackupRebase = false;
    this._pendingUpdaters = new Set();
    this._pendingData = new Set();
    this._pendingOptimisticUpdates = new Set();
    this._store = store;
    this._appliedOptimisticUpdates = new Set();
    this._gcHold = null;
    this._getDataID = getDataID;
  }
  /**
   * Schedule applying an optimistic updates on the next `run()`.
   */


  var _proto = RelayPublishQueue.prototype;

  _proto.applyUpdate = function applyUpdate(updater) {
    !(!this._appliedOptimisticUpdates.has(updater) && !this._pendingOptimisticUpdates.has(updater)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayPublishQueue: Cannot apply the same update function more than ' + 'once concurrently.') : invariant(false) : void 0;

    this._pendingOptimisticUpdates.add(updater);
  }
  /**
   * Schedule reverting an optimistic updates on the next `run()`.
   */
  ;

  _proto.revertUpdate = function revertUpdate(updater) {
    if (this._pendingOptimisticUpdates.has(updater)) {
      // Reverted before it was applied
      this._pendingOptimisticUpdates["delete"](updater);
    } else if (this._appliedOptimisticUpdates.has(updater)) {
      this._pendingBackupRebase = true;

      this._appliedOptimisticUpdates["delete"](updater);
    }
  }
  /**
   * Schedule a revert of all optimistic updates on the next `run()`.
   */
  ;

  _proto.revertAll = function revertAll() {
    this._pendingBackupRebase = true;

    this._pendingOptimisticUpdates.clear();

    this._appliedOptimisticUpdates.clear();
  }
  /**
   * Schedule applying a payload to the store on the next `run()`.
   */
  ;

  _proto.commitPayload = function commitPayload(operation, payload, updater) {
    this._pendingBackupRebase = true;

    this._pendingData.add({
      kind: 'payload',
      operation: operation,
      payload: payload,
      updater: updater
    });
  }
  /**
   * Schedule an updater to mutate the store on the next `run()` typically to
   * update client schema fields.
   */
  ;

  _proto.commitUpdate = function commitUpdate(updater) {
    this._pendingBackupRebase = true;

    this._pendingUpdaters.add(updater);
  }
  /**
   * Schedule a publish to the store from the provided source on the next
   * `run()`. As an example, to update the store with substituted fields that
   * are missing in the store.
   */
  ;

  _proto.commitSource = function commitSource(source) {
    this._pendingBackupRebase = true;

    this._pendingData.add({
      kind: 'source',
      source: source
    });
  }
  /**
   * Execute all queued up operations from the other public methods.
   */
  ;

  _proto.run = function run() {
    if (this._pendingBackupRebase && this._backup.size()) {
      this._store.publish(this._backup);

      this._backup = RelayRecordSource.create();
    }

    this._commitData();

    this._commitUpdaters();

    this._applyUpdates();

    this._pendingBackupRebase = false;

    if (this._appliedOptimisticUpdates.size > 0) {
      if (!this._gcHold) {
        this._gcHold = this._store.holdGC();
      }
    } else {
      if (this._gcHold) {
        this._gcHold.dispose();

        this._gcHold = null;
      }
    }

    return this._store.notify();
  };

  _proto._getSourceFromPayload = function _getSourceFromPayload(pendingPayload) {
    var _this = this;

    var payload = pendingPayload.payload,
        operation = pendingPayload.operation,
        updater = pendingPayload.updater;
    var source = payload.source,
        fieldPayloads = payload.fieldPayloads;
    var mutator = new RelayRecordSourceMutator(this._store.getSource(), source);
    var store = new RelayRecordSourceProxy(mutator, this._getDataID);

    if (fieldPayloads && fieldPayloads.length) {
      fieldPayloads.forEach(function (fieldPayload) {
        var handler = _this._handlerProvider && _this._handlerProvider(fieldPayload.handle);

        !handler ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernEnvironment: Expected a handler to be provided for ' + 'handle `%s`.', fieldPayload.handle) : invariant(false) : void 0;
        handler.update(store, fieldPayload);
      });
    }

    if (updater) {
      var selector = operation.fragment;
      !(selector != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernEnvironment: Expected a selector to be provided with updater function.') : invariant(false) : void 0;
      var selectorStore = new RelayRecordSourceSelectorProxy(store, selector);
      var selectorData = lookupSelector(source, selector);
      updater(selectorStore, selectorData);
    }

    return source;
  };

  _proto._commitData = function _commitData() {
    var _this2 = this;

    if (!this._pendingData.size) {
      return;
    }

    this._pendingData.forEach(function (data) {
      if (data.kind === 'payload') {
        var source = _this2._getSourceFromPayload(data);

        _this2._store.publish(source);

        if (data.payload.connectionEvents) {
          _this2._store.publishConnectionEvents_UNSTABLE(data.payload.connectionEvents);
        }
      } else {
        var _source = data.source;

        _this2._store.publish(_source);
      }
    });

    this._pendingData.clear();
  };

  _proto._commitUpdaters = function _commitUpdaters() {
    var _this3 = this;

    if (!this._pendingUpdaters.size) {
      return;
    }

    var sink = RelayRecordSource.create();

    this._pendingUpdaters.forEach(function (updater) {
      var mutator = new RelayRecordSourceMutator(_this3._store.getSource(), sink);
      var store = new RelayRecordSourceProxy(mutator, _this3._getDataID);
      ErrorUtils.applyWithGuard(updater, null, [store], null, 'RelayPublishQueue:commitUpdaters');
    });

    this._store.publish(sink);

    this._pendingUpdaters.clear();
  };

  _proto._applyUpdates = function _applyUpdates() {
    var _this4 = this;

    if (this._pendingOptimisticUpdates.size || this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
      var sink = RelayRecordSource.create();
      var mutator = new RelayRecordSourceMutator(this._store.getSource(), sink, this._backup);
      var store = new RelayRecordSourceProxy(mutator, this._getDataID, this._handlerProvider); // rerun all updaters in case we are running a rebase

      if (this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
        this._appliedOptimisticUpdates.forEach(function (optimisticUpdate) {
          if (optimisticUpdate.storeUpdater) {
            var storeUpdater = optimisticUpdate.storeUpdater;
            ErrorUtils.applyWithGuard(storeUpdater, null, [store], null, 'RelayPublishQueue:applyUpdates');
          } else {
            var operation = optimisticUpdate.operation,
                payload = optimisticUpdate.payload,
                updater = optimisticUpdate.updater;
            var source = payload.source,
                fieldPayloads = payload.fieldPayloads;
            var selectorStore = new RelayRecordSourceSelectorProxy(store, operation.fragment);
            var selectorData;

            if (source) {
              store.publishSource(source, fieldPayloads);
              selectorData = lookupSelector(source, operation.fragment);
            }

            if (updater) {
              ErrorUtils.applyWithGuard(updater, null, [selectorStore, selectorData], null, 'RelayPublishQueue:applyUpdates');
            }
          }
        });
      } // apply any new updaters


      if (this._pendingOptimisticUpdates.size) {
        this._pendingOptimisticUpdates.forEach(function (optimisticUpdate) {
          if (optimisticUpdate.storeUpdater) {
            var storeUpdater = optimisticUpdate.storeUpdater;
            ErrorUtils.applyWithGuard(storeUpdater, null, [store], null, 'RelayPublishQueue:applyUpdates');
          } else {
            var operation = optimisticUpdate.operation,
                payload = optimisticUpdate.payload,
                updater = optimisticUpdate.updater;
            var source = payload.source,
                fieldPayloads = payload.fieldPayloads;
            var selectorStore = new RelayRecordSourceSelectorProxy(store, operation.fragment);
            var selectorData;

            if (source) {
              store.publishSource(source, fieldPayloads);
              selectorData = lookupSelector(source, operation.fragment);
            }

            if (updater) {
              ErrorUtils.applyWithGuard(updater, null, [selectorStore, selectorData], null, 'RelayPublishQueue:applyUpdates');
            }
          }

          _this4._appliedOptimisticUpdates.add(optimisticUpdate);
        });

        this._pendingOptimisticUpdates.clear();
      }

      this._store.publish(sink);
    }
  };

  return RelayPublishQueue;
}();

function lookupSelector(source, selector) {
  var selectorData = RelayReader.read(source, selector).data;

  if (process.env.NODE_ENV !== "production") {
    var deepFreeze = require("./deepFreeze");

    if (selectorData) {
      deepFreeze(selectorData);
    }
  }

  return selectorData;
}

module.exports = RelayPublishQueue;