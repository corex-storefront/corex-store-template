/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
'use strict';

var invariant = require("fbjs/lib/invariant");
/**
 * Returns original component class wrapped by e.g. createFragmentContainer
 */


function unwrapContainer(ComponentClass) {
  // $FlowExpectedError
  var unwrapped = ComponentClass.__ComponentClass;
  !(unwrapped != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Could not find component for %s, is it a Relay container?', ComponentClass.displayName || ComponentClass.name) : invariant(false) : void 0;
  return unwrapped;
}

module.exports = unwrapContainer;