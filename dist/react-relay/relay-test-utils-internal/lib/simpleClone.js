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
/**
 * A helper to create a deep clone of a value, plain Object, or array of such.
 *
 * Does not support RegExp, Date, other classes, or self-referential values.
 */

function simpleClone(value) {
  if (Array.isArray(value)) {
    return value.map(simpleClone);
  } else if (value != null && typeof value === 'object') {
    var result = {};

    for (var key in value) {
      result[key] = simpleClone(value[key]);
    } // $FlowFixMe


    return result;
  } else {
    return value;
  }
}

module.exports = simpleClone;