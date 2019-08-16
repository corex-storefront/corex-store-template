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

var RelayConcreteNode = require("./RelayConcreteNode");

var RelayConcreteVariables = require("./RelayConcreteVariables");

var RelayConnectionHandler = require("./RelayConnectionHandler");

var RelayConnectionInterface = require("./RelayConnectionInterface");

var RelayDeclarativeMutationConfig = require("./RelayDeclarativeMutationConfig");

var RelayDefaultHandleKey = require("./RelayDefaultHandleKey");

var RelayDefaultHandlerProvider = require("./RelayDefaultHandlerProvider");

var RelayDefaultMissingFieldHandlers = require("./RelayDefaultMissingFieldHandlers");

var RelayError = require("./RelayError");

var RelayFeatureFlags = require("./RelayFeatureFlags");

var RelayModernEnvironment = require("./RelayModernEnvironment");

var RelayModernFragmentOwner = require("./RelayModernFragmentOwner");

var RelayModernGraphQLTag = require("./RelayModernGraphQLTag");

var RelayModernOperationDescriptor = require("./RelayModernOperationDescriptor");

var RelayModernSelector = require("./RelayModernSelector");

var RelayModernStore = require("./RelayModernStore");

var RelayNetwork = require("./RelayNetwork");

var RelayNetworkLoggerTransaction = require("./RelayNetworkLoggerTransaction");

var RelayObservable = require("./RelayObservable");

var RelayOperationTracker = require("./RelayOperationTracker");

var RelayProfiler = require("./RelayProfiler");

var RelayQueryResponseCache = require("./RelayQueryResponseCache");

var RelayRecordSource = require("./RelayRecordSource");

var RelayStoreUtils = require("./RelayStoreUtils");

var ViewerPattern = require("./ViewerPattern");

var applyOptimisticMutation = require("./applyOptimisticMutation");

var commitLocalUpdate = require("./commitLocalUpdate");

var commitMutation = require("./commitMutation");

var createFragmentSpecResolver = require("./createFragmentSpecResolver");

var createRelayContext = require("./createRelayContext");

var createRelayNetworkLogger = require("./createRelayNetworkLogger");

var deepFreeze = require("./deepFreeze");

var fetchQuery = require("./fetchQuery");

var fetchQueryInternal = require("./fetchQueryInternal");

var getFragmentIdentifier = require("./getFragmentIdentifier");

var getFragmentSpecIdentifier = require("./getFragmentSpecIdentifier");

var getRelayHandleKey = require("./getRelayHandleKey");

var isRelayModernEnvironment = require("./isRelayModernEnvironment");

var isScalarAndEqual = require("./isScalarAndEqual");

var recycleNodesInto = require("./recycleNodesInto");

var requestSubscription = require("./requestSubscription");

var stableCopy = require("./stableCopy");

var _require = require("./ClientID"),
    generateClientID = _require.generateClientID; // As early as possible, check for the existence of the JavaScript globals which
// Relay Runtime relies upon, and produce a clear message if they do not exist.


if (process.env.NODE_ENV !== "production") {
  if (typeof Map !== 'function' || typeof Set !== 'function' || typeof Promise !== 'function' || typeof Object.assign !== 'function') {
    throw new Error('relay-runtime requires Map, Set, Promise, and Object.assign to exist. ' + 'Use a polyfill to provide these for older browsers.');
  }
}
/**
 * The public interface to Relay Runtime.
 */


module.exports = {
  // Core API
  Environment: RelayModernEnvironment,
  Network: RelayNetwork,
  Observable: RelayObservable,
  QueryResponseCache: RelayQueryResponseCache,
  RecordSource: RelayRecordSource,
  Store: RelayModernStore,
  areEqualSelectors: RelayModernSelector.areEqualSelectors,
  createFragmentSpecResolver: createFragmentSpecResolver,
  createNormalizationSelector: RelayModernSelector.createNormalizationSelector,
  createOperationDescriptor: RelayModernOperationDescriptor.createOperationDescriptor,
  createReaderSelector: RelayModernSelector.createReaderSelector,
  createRequestDescriptor: RelayModernOperationDescriptor.createRequestDescriptor,
  getDataIDsFromFragment: RelayModernSelector.getDataIDsFromFragment,
  getDataIDsFromObject: RelayModernSelector.getDataIDsFromObject,
  getFragment: RelayModernGraphQLTag.getFragment,
  getFragmentOwner: RelayModernFragmentOwner.getFragmentOwner,
  getFragmentOwners: RelayModernFragmentOwner.getFragmentOwners,
  getInlineDataFragment: RelayModernGraphQLTag.getInlineDataFragment,
  getModuleComponentKey: RelayStoreUtils.getModuleComponentKey,
  getModuleOperationKey: RelayStoreUtils.getModuleOperationKey,
  getPaginationFragment: RelayModernGraphQLTag.getPaginationFragment,
  getPluralSelector: RelayModernSelector.getPluralSelector,
  getRefetchableFragment: RelayModernGraphQLTag.getRefetchableFragment,
  getRequest: RelayModernGraphQLTag.getRequest,
  getSelector: RelayModernSelector.getSelector,
  getSelectorsFromObject: RelayModernSelector.getSelectorsFromObject,
  getSingularSelector: RelayModernSelector.getSingularSelector,
  getStorageKey: RelayStoreUtils.getStorageKey,
  getVariablesFromFragment: RelayModernSelector.getVariablesFromFragment,
  getVariablesFromObject: RelayModernSelector.getVariablesFromObject,
  getVariablesFromPluralFragment: RelayModernSelector.getVariablesFromPluralFragment,
  getVariablesFromSingularFragment: RelayModernSelector.getVariablesFromSingularFragment,
  graphql: RelayModernGraphQLTag.graphql,
  // Declarative mutation API
  MutationTypes: RelayDeclarativeMutationConfig.MutationTypes,
  RangeOperations: RelayDeclarativeMutationConfig.RangeOperations,
  // Extensions
  DefaultHandlerProvider: RelayDefaultHandlerProvider,
  DefaultMissingFieldHandlers: RelayDefaultMissingFieldHandlers,
  ConnectionHandler: RelayConnectionHandler,
  VIEWER_ID: ViewerPattern.VIEWER_ID,
  VIEWER_TYPE: ViewerPattern.VIEWER_TYPE,
  // Helpers (can be implemented via the above API)
  applyOptimisticMutation: applyOptimisticMutation,
  commitLocalUpdate: commitLocalUpdate,
  commitMutation: commitMutation,
  fetchQuery: fetchQuery,
  isRelayModernEnvironment: isRelayModernEnvironment,
  requestSubscription: requestSubscription,
  // Configuration interface for legacy or special uses
  ConnectionInterface: RelayConnectionInterface,
  // Utilities
  RelayProfiler: RelayProfiler,
  // INTERNAL-ONLY: These exports might be removed at any point.
  RelayConcreteNode: RelayConcreteNode,
  RelayError: RelayError,
  RelayFeatureFlags: RelayFeatureFlags,
  RelayNetworkLoggerTransaction: RelayNetworkLoggerTransaction,
  DEFAULT_HANDLE_KEY: RelayDefaultHandleKey.DEFAULT_HANDLE_KEY,
  FRAGMENTS_KEY: RelayStoreUtils.FRAGMENTS_KEY,
  FRAGMENT_OWNER_KEY: RelayStoreUtils.FRAGMENT_OWNER_KEY,
  ID_KEY: RelayStoreUtils.ID_KEY,
  REF_KEY: RelayStoreUtils.REF_KEY,
  REFS_KEY: RelayStoreUtils.REFS_KEY,
  ROOT_ID: RelayStoreUtils.ROOT_ID,
  ROOT_TYPE: RelayStoreUtils.ROOT_TYPE,
  TYPENAME_KEY: RelayStoreUtils.TYPENAME_KEY,
  createRelayNetworkLogger: createRelayNetworkLogger,
  deepFreeze: deepFreeze,
  generateClientID: generateClientID,
  getRelayHandleKey: getRelayHandleKey,
  isScalarAndEqual: isScalarAndEqual,
  recycleNodesInto: recycleNodesInto,
  stableCopy: stableCopy,
  getFragmentIdentifier: getFragmentIdentifier,
  getFragmentSpecIdentifier: getFragmentSpecIdentifier,
  __internal: {
    OperationTracker: RelayOperationTracker,
    createRelayContext: createRelayContext,
    getModernOperationVariables: RelayConcreteVariables.getOperationVariables,
    fetchQuery: fetchQueryInternal.fetchQuery,
    fetchQueryDeduped: fetchQueryInternal.fetchQueryDeduped,
    getPromiseForRequestInFlight: fetchQueryInternal.getPromiseForRequestInFlight,
    getObservableForRequestInFlight: fetchQueryInternal.getObservableForRequestInFlight,
    hasRequestInFlight: fetchQueryInternal.hasRequestInFlight
  }
};