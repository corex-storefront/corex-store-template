/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
'use strict';
/* global expect */

function toBeDeeplyFrozen(actual) {
  function check(value) {
    expect(Object.isFrozen(value)).toBe(true);

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return check(item);
      });
    } else if (typeof value === 'object' && value !== null) {
      for (var key in value) {
        check(value[key]);
      }
    }
  }

  check(actual);
  return {
    pass: true
  };
}

function toWarn(actual, expected) {
  var negative = this.isNot;

  function formatItem(item) {
    return item instanceof RegExp ? item.toString() : JSON.stringify(item);
  }

  function formatArray(array) {
    return '[' + array.map(formatItem).join(', ') + ']';
  }

  function formatExpected(args) {
    return formatArray([false].concat(args));
  }

  function formatActual(calls) {
    if (calls.length) {
      return calls.map(function (args) {
        return formatArray([!!args[0]].concat(args.slice(1)));
      }).join(', ');
    } else {
      return '[]';
    }
  }

  var warning = require("fbjs/lib/warning");

  if (!warning.mock) {
    throw new Error("toWarn(): Requires `jest.mock('warning')`.");
  }

  var callsCount = warning.mock.calls.length;
  actual();
  var calls = warning.mock.calls.slice(callsCount); // Simple case: no explicit expectation.

  if (!expected) {
    var warned = calls.filter(function (args) {
      return !args[0];
    }).length;
    return {
      pass: !!warned,
      message: function message() {
        return "Expected ".concat(negative ? 'not ' : '', "to warn but ") + '`warning` received the following calls: ' + "".concat(formatActual(calls), ".");
      }
    };
  } // Custom case: explicit expectation.


  if (!Array.isArray(expected)) {
    expected = [expected];
  }

  var call = calls.find(function (args) {
    return args.length === expected.length + 1 && args.every(function (arg, index) {
      if (!index) {
        return !arg;
      }

      var other = expected[index - 1];
      return other instanceof RegExp ? other.test(arg) : arg === other;
    });
  });
  return {
    pass: !!call,
    message: function message() {
      return "Expected ".concat(negative ? 'not ' : '', "to warn: ") + "".concat(formatExpected(expected), " but ") + '`warning` received the following calls: ' + "".concat(formatActual(calls), ".");
    }
  };
}

module.exports = {
  toBeDeeplyFrozen: toBeDeeplyFrozen,
  toWarn: toWarn
};