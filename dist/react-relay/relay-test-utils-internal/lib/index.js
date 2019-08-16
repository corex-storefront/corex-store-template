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

var Matchers = require("./Matchers");

var RelayTestSchema = require("./RelayTestSchema");

var RelayTestSchemaPath = require("./RelayTestSchemaPath");

var parseGraphQLText = require("./parseGraphQLText");

var simpleClone = require("./simpleClone");

var _require = require("./TestCompiler"),
    generateAndCompile = _require.generateAndCompile,
    generateWithTransforms = _require.generateWithTransforms;

var _require2 = require("./generateTestsFromFixtures"),
    generateTestsFromFixtures = _require2.generateTestsFromFixtures,
    FIXTURE_TAG = _require2.FIXTURE_TAG;

var _require3 = require("relay-test-utils"),
    createMockEnvironment = _require3.createMockEnvironment,
    unwrapContainer = _require3.unwrapContainer;
/**
 * The public interface to Relay Test Utils.
 */


module.exports = {
  createMockEnvironment: createMockEnvironment,
  testSchemaPath: RelayTestSchemaPath,
  TestSchema: RelayTestSchema,
  generateAndCompile: generateAndCompile,
  generateTestsFromFixtures: generateTestsFromFixtures,
  generateWithTransforms: generateWithTransforms,
  matchers: Matchers,
  simpleClone: simpleClone,
  parseGraphQLText: parseGraphQLText,
  unwrapContainer: unwrapContainer,
  FIXTURE_TAG: FIXTURE_TAG
};