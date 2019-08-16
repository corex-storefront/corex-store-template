/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var fs = require("fs");

var getOutputForFixture = require("./getOutputForFixture");

var path = require("path");
/* global expect,test */

/**
 * Extend Jest with a custom snapshot serializer to provide additional context
 * and reduce the amount of escaping that occurs.
 */


var FIXTURE_TAG = Symbol["for"]('FIXTURE_TAG');
expect.addSnapshotSerializer({
  print: function print(value) {
    return Object.keys(value).map(function (key) {
      return "~~~~~~~~~~ ".concat(key.toUpperCase(), " ~~~~~~~~~~\n").concat(value[key]);
    }).join('\n');
  },
  test: function test(value) {
    return value && value[FIXTURE_TAG] === true;
  }
});
/**
 * Generates a set of jest snapshot tests that compare the output of the
 * provided `operation` to each of the matching files in the `fixturesPath`.
 * The fixture should have '# expected-to-throw' on its first line
 * if it is expected to fail
 */

function generateTestsFromFixtures(fixturesPath, operation) {
  var fixtures = fs.readdirSync(fixturesPath);
  test("has fixtures in ".concat(fixturesPath), function () {
    expect(fixtures.length > 0).toBe(true);
  });
  var onlyFixtures = fixtures.filter(function (name) {
    return name.startsWith('only.');
  });

  if (onlyFixtures.length) {
    test.skip.each(fixtures.filter(function (name) {
      return !name.startsWith('only.');
    }))('matches expected output: %s', function () {});
    fixtures = onlyFixtures;
  }

  test.each(fixtures)('matches expected output: %s', function (file) {
    var _expect;

    var input = fs.readFileSync(path.join(fixturesPath, file), 'utf8');
    var output = getOutputForFixture(input, operation, file);
    expect((_expect = {}, (0, _defineProperty2["default"])(_expect, FIXTURE_TAG, true), (0, _defineProperty2["default"])(_expect, "input", input), (0, _defineProperty2["default"])(_expect, "output", output), _expect)).toMatchSnapshot();
  });
}

module.exports = {
  generateTestsFromFixtures: generateTestsFromFixtures,
  FIXTURE_TAG: FIXTURE_TAG
};