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

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var DataChecker = require("./DataChecker");

var RelayFeatureFlags = require("./RelayFeatureFlags");

var RelayModernRecord = require("./RelayModernRecord");

var RelayProfiler = require("./RelayProfiler");

var RelayReader = require("./RelayReader");

var RelayReferenceMarker = require("./RelayReferenceMarker");

var deepFreeze = require("./deepFreeze");

var defaultGetDataID = require("./defaultGetDataID");

var hasOverlappingIDs = require("./hasOverlappingIDs");

var invariant = require("fbjs/lib/invariant");

var recycleNodesInto = require("./recycleNodesInto");

var resolveImmediate = require("fbjs/lib/resolveImmediate");

var _require = require("./RelayModernSelector"),
    createReaderSelector = _require.createReaderSelector;

var _require2 = require("./RelayStoreUtils"),
    UNPUBLISH_RECORD_SENTINEL = _require2.UNPUBLISH_RECORD_SENTINEL;
/**
 * @public
 *
 * An implementation of the `Store` interface defined in `RelayStoreTypes`.
 *
 * Note that a Store takes ownership of all records provided to it: other
 * objects may continue to hold a reference to such records but may not mutate
 * them. The static Relay core is architected to avoid mutating records that may have been
 * passed to a store: operations that mutate records will either create fresh
 * records or clone existing records and modify the clones. Record immutability
 * is also enforced in development mode by freezing all records passed to a store.
 */


var RelayModernStore =
/*#__PURE__*/
function () {
  function RelayModernStore(source) {
    var _UNSTABLE_DO_NOT_USE_;

    var gcScheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : resolveImmediate;
    var operationLoader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var UNSTABLE_DO_NOT_USE_getDataID = arguments.length > 3 ? arguments[3] : undefined; // Prevent mutation of a record from outside the store.

    if (process.env.NODE_ENV !== "production") {
      var storeIDs = source.getRecordIDs();

      for (var ii = 0; ii < storeIDs.length; ii++) {
        var record = source.get(storeIDs[ii]);

        if (record) {
          RelayModernRecord.freeze(record);
        }
      }
    }

    this._connectionEvents = new Map();
    this._connectionSubscriptions = new Set();
    this._gcScheduler = gcScheduler;
    this._hasScheduledGC = false;
    this._index = 0;
    this._operationLoader = operationLoader;
    this._pendingConnectionEvents = new Map();
    this._recordSource = source;
    this._roots = new Map();
    this._subscriptions = new Set();
    this._updatedConnectionIDs = {};
    this._updatedRecordIDs = {};
    this._gcHoldCounter = 0;
    this._shouldScheduleGC = false;
    this._getDataID = (_UNSTABLE_DO_NOT_USE_ = UNSTABLE_DO_NOT_USE_getDataID) !== null && _UNSTABLE_DO_NOT_USE_ !== void 0 ? _UNSTABLE_DO_NOT_USE_ : defaultGetDataID;
  }

  var _proto = RelayModernStore.prototype;

  _proto.getSource = function getSource() {
    return this._recordSource;
  };

  _proto.check = function check(selector) {
    return DataChecker.check(this._recordSource, this._recordSource, selector, [], this._operationLoader, this._getDataID);
  };

  _proto.retain = function retain(selector) {
    var _this = this;

    var index = this._index++;

    var dispose = function dispose() {
      _this._roots["delete"](index);

      _this._scheduleGC();
    };

    this._roots.set(index, selector);

    return {
      dispose: dispose
    };
  };

  _proto.lookup = function lookup(selector) {
    var snapshot = RelayReader.read(this._recordSource, selector);

    if (process.env.NODE_ENV !== "production") {
      deepFreeze(snapshot);
    }

    return snapshot;
  } // This method will return a list of updated owners form the subscriptions
  ;

  _proto.notify = function notify() {
    var _this2 = this;

    var updatedOwners = [];

    this._subscriptions.forEach(function (subscription) {
      var owner = _this2._updateSubscription(subscription);

      if (owner != null) {
        updatedOwners.push(owner);
      }
    });

    this._connectionSubscriptions.forEach(function (subscription) {
      _this2._updateConnection(subscription);
    });

    this._pendingConnectionEvents.forEach(function (newEvents, connectionID) {
      var events = _this2._connectionEvents.get(connectionID);

      if (events == null) {
        _this2._connectionEvents.set(connectionID, newEvents);
      } else {
        _this2._connectionEvents.set(connectionID, events.concat(newEvents));
      }
    });

    this._updatedConnectionIDs = {};
    this._updatedRecordIDs = {};
    return updatedOwners;
  };

  _proto.publish = function publish(source) {
    updateTargetFromSource(this._recordSource, source, this._updatedRecordIDs);
  };

  _proto.publishConnectionEvents_UNSTABLE = function publishConnectionEvents_UNSTABLE(events) {
    var _this3 = this;

    if (events.length === 0) {
      return;
    }

    !RelayFeatureFlags.ENABLE_CONNECTION_RESOLVERS ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernStore: Connection resolvers are not yet supported.') : invariant(false) : void 0;
    events.forEach(function (event) {
      var connectionEvents = _this3._pendingConnectionEvents.get(event.connectionID);

      if (connectionEvents == null) {
        connectionEvents = [];

        _this3._pendingConnectionEvents.set(event.connectionID, connectionEvents);
      }

      connectionEvents.push(event);
    });
  };

  _proto.subscribe = function subscribe(snapshot, callback) {
    var _this4 = this;

    var subscription = {
      callback: callback,
      snapshot: snapshot
    };

    var dispose = function dispose() {
      _this4._subscriptions["delete"](subscription);
    };

    this._subscriptions.add(subscription);

    return {
      dispose: dispose
    };
  };

  _proto.holdGC = function holdGC() {
    var _this5 = this;

    this._gcHoldCounter++;

    var dispose = function dispose() {
      if (_this5._gcHoldCounter > 0) {
        _this5._gcHoldCounter--;

        if (_this5._gcHoldCounter === 0 && _this5._shouldScheduleGC) {
          _this5._scheduleGC();

          _this5._shouldScheduleGC = false;
        }
      }
    };

    return {
      dispose: dispose
    };
  };

  _proto.lookupConnection_UNSTABLE = function lookupConnection_UNSTABLE(connectionReference) {
    var _this6 = this;

    var _edgeField$concreteTy;

    !RelayFeatureFlags.ENABLE_CONNECTION_RESOLVERS ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernStore: Connection resolvers are not yet supported.') : invariant(false) : void 0;
    var edgeField = connectionReference.edgeField,
        id = connectionReference.id,
        resolver = connectionReference.resolver,
        variables = connectionReference.variables;
    var initialState = resolver.initialize(); // todo: is this legit? only if we filter out fetch events whose type matches

    var events = this._connectionEvents.get(id);

    if (events == null) {
      return {
        id: id,
        reference: connectionReference,
        seenRecords: {},
        state: initialState
      };
    }

    var fragment = {
      kind: 'Fragment',
      name: edgeField.name,
      type: (_edgeField$concreteTy = edgeField.concreteType) !== null && _edgeField$concreteTy !== void 0 ? _edgeField$concreteTy : '__Any',
      metadata: null,
      argumentDefinitions: [],
      selections: edgeField.selections
    };
    var seenRecords = {};
    var state = events.reduce(function (prevState, event) {
      if (event.kind === 'fetch') {
        var edges = event.edgeIDs.map(function (edgeID) {
          if (edgeID == null) {
            return edgeID;
          }

          var edgeSnapshot = RelayReader.read(_this6._recordSource, createReaderSelector(fragment, edgeID, variables, event.request));
          Object.assign(seenRecords, edgeSnapshot.seenRecords);
          return edgeSnapshot.data;
        });
        return resolver.reduce(prevState, {
          kind: 'fetch',
          args: event.args,
          edges: edges,
          pageInfo: event.pageInfo
        });
      } else if (event.kind === 'insert') {
        var edgeSnapshot = RelayReader.read(_this6._recordSource, createReaderSelector(fragment, event.edgeID, variables, event.request));
        Object.assign(seenRecords, edgeSnapshot.seenRecords);
        return resolver.reduce(prevState, {
          kind: 'insert',
          args: event.args,
          edge: edgeSnapshot.data
        });
      } else {
        event.kind;
        !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernStore: Unexpected connection event kind `%s`.', event.kind) : invariant(false) : void 0;
      }
    }, initialState);
    return {
      id: id,
      reference: connectionReference,
      seenRecords: seenRecords,
      state: state
    };
  };

  _proto.subscribeConnection_UNSTABLE = function subscribeConnection_UNSTABLE(snapshot, callback) {
    var _this7 = this;

    !RelayFeatureFlags.ENABLE_CONNECTION_RESOLVERS ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernStore: Connection resolvers are not yet supported.') : invariant(false) : void 0;
    var subscription = {
      callback: callback,
      snapshot: snapshot
    };

    var dispose = function dispose() {
      _this7._connectionSubscriptions["delete"](subscription);
    };

    this._connectionSubscriptions.add(subscription);

    return {
      dispose: dispose
    };
  };

  _proto.toJSON = function toJSON() {
    return 'RelayModernStore()';
  } // Internal API
  ;

  _proto.__getUpdatedRecordIDs = function __getUpdatedRecordIDs() {
    return this._updatedRecordIDs;
  } // We are returning an instance of RequestDescriptor here if the snapshot
  // were updated. We will use this information in the RelayOperationTracker
  // in order to track which owner was affected by which operation.
  ;

  _proto._updateSubscription = function _updateSubscription(subscription) {
    var callback = subscription.callback,
        snapshot = subscription.snapshot;

    if (!hasOverlappingIDs(snapshot.seenRecords, this._updatedRecordIDs)) {
      return;
    }

    var nextSnapshot = RelayReader.read(this._recordSource, snapshot.selector);
    var nextData = recycleNodesInto(snapshot.data, nextSnapshot.data);
    nextSnapshot = (0, _objectSpread2["default"])({}, nextSnapshot, {
      data: nextData
    });

    if (process.env.NODE_ENV !== "production") {
      deepFreeze(nextSnapshot);
    }

    subscription.snapshot = nextSnapshot;

    if (nextSnapshot.data !== snapshot.data) {
      callback(nextSnapshot);
      return snapshot.selector.owner;
    }
  };

  _proto._updateConnection = function _updateConnection(connection) {
    var snapshot = connection.snapshot,
        callback = connection.callback;

    if (!this._pendingConnectionEvents.has(snapshot.reference.id) && !hasOverlappingIDs(snapshot.seenRecords, this._updatedRecordIDs)) {
      return;
    }

    var nextSnapshot = this.lookupConnection_UNSTABLE(snapshot.reference);
    var state = recycleNodesInto(snapshot.state, nextSnapshot.state);

    if (process.env.NODE_ENV !== "production") {
      deepFreeze(nextSnapshot);
    }

    connection.snapshot = nextSnapshot;

    if (state !== snapshot.state) {
      callback(state);
    }
  };

  _proto._scheduleGC = function _scheduleGC() {
    var _this8 = this;

    if (this._gcHoldCounter > 0) {
      this._shouldScheduleGC = true;
      return;
    }

    if (this._hasScheduledGC) {
      return;
    }

    this._hasScheduledGC = true;

    this._gcScheduler(function () {
      _this8.__gc();

      _this8._hasScheduledGC = false;
    });
  };

  _proto.__gc = function __gc() {
    var _this9 = this;

    var references = new Set(); // Mark all records that are traversable from a root

    this._roots.forEach(function (selector) {
      RelayReferenceMarker.mark(_this9._recordSource, selector, references, _this9._operationLoader);
    }); // Short-circuit if *nothing* is referenced


    if (!references.size) {
      this._recordSource.clear();

      return;
    } // Evict any unreferenced nodes


    var storeIDs = this._recordSource.getRecordIDs();

    for (var ii = 0; ii < storeIDs.length; ii++) {
      var dataID = storeIDs[ii];

      if (!references.has(dataID)) {
        this._recordSource.remove(dataID);
      }
    }
  };

  return RelayModernStore;
}();
/**
 * Updates the target with information from source, also updating a mapping of
 * which records in the target were changed as a result.
 */


function updateTargetFromSource(target, source, updatedRecordIDs) {
  var dataIDs = source.getRecordIDs();

  for (var ii = 0; ii < dataIDs.length; ii++) {
    var dataID = dataIDs[ii];
    var sourceRecord = source.get(dataID);
    var targetRecord = target.get(dataID); // Prevent mutation of a record from outside the store.

    if (process.env.NODE_ENV !== "production") {
      if (sourceRecord) {
        RelayModernRecord.freeze(sourceRecord);
      }
    }

    if (sourceRecord === UNPUBLISH_RECORD_SENTINEL) {
      // Unpublish a record
      target.remove(dataID);
      updatedRecordIDs[dataID] = true;
    } else if (sourceRecord && targetRecord) {
      var nextRecord = RelayModernRecord.update(targetRecord, sourceRecord);

      if (nextRecord !== targetRecord) {
        // Prevent mutation of a record from outside the store.
        if (process.env.NODE_ENV !== "production") {
          RelayModernRecord.freeze(nextRecord);
        }

        updatedRecordIDs[dataID] = true;
        target.set(dataID, nextRecord);
      }
    } else if (sourceRecord === null) {
      target["delete"](dataID);

      if (targetRecord !== null) {
        updatedRecordIDs[dataID] = true;
      }
    } else if (sourceRecord) {
      target.set(dataID, sourceRecord);
      updatedRecordIDs[dataID] = true;
    } // don't add explicit undefined

  }
}

RelayProfiler.instrumentMethods(RelayModernStore.prototype, {
  lookup: 'RelayModernStore.prototype.lookup',
  notify: 'RelayModernStore.prototype.notify',
  publish: 'RelayModernStore.prototype.publish',
  __gc: 'RelayModernStore.prototype.__gc'
});
module.exports = RelayModernStore;