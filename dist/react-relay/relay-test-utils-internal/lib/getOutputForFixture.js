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

function getOutputForFixture(input, operation, file) {
  var shouldThrow = /^# *expected-to-throw/.test(input);

  if (shouldThrow) {
    var result;

    try {
      result = operation(input);
    } catch (e) {
      return "THROWN EXCEPTION:\n\n".concat(e.toString());
    }

    throw new Error("Expected test file '".concat(file, "' to throw, but it passed:\n").concat(result));
  } else {
    return operation(input);
  }
}

module.exports = getOutputForFixture;