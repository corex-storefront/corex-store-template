/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
'use strict';

var RelayTestSchema = require("./RelayTestSchema");

var parseGraphQLText = require("./parseGraphQLText");

var _require = require("relay-compiler"),
    CodeMarker = _require.CodeMarker,
    GraphQLCompilerContext = _require.GraphQLCompilerContext,
    IRTransforms = _require.IRTransforms,
    compileRelayArtifacts = _require.compileRelayArtifacts,
    transformASTSchema = _require.transformASTSchema;
/**
 * Parses GraphQL text, applies the selected transforms only (or none if
 * transforms is not specified), and returns a mapping of definition name to
 * its basic generated representation.
 */


function generateWithTransforms(text, transforms) {
  return generate(text, RelayTestSchema, {
    commonTransforms: transforms || [],
    fragmentTransforms: [],
    queryTransforms: [],
    codegenTransforms: [],
    printTransforms: []
  }, null);
}
/**
 * Compiles the given GraphQL text using the standard set of transforms (as
 * defined in RelayCompiler) and returns a mapping of definition name to
 * its full runtime representation.
 */


function generateAndCompile(text, schema, moduleMap) {
  var _moduleMap;

  return generate(text, schema || RelayTestSchema, IRTransforms, (_moduleMap = moduleMap) !== null && _moduleMap !== void 0 ? _moduleMap : null);
}

function generate(text, schema, transforms, moduleMap) {
  var relaySchema = transformASTSchema(schema, IRTransforms.schemaExtensions);
  var compilerContext = new GraphQLCompilerContext(schema, relaySchema).addAll(parseGraphQLText(relaySchema, text).definitions);
  var documentMap = {};
  compileRelayArtifacts(compilerContext, transforms).forEach(function (_ref) {
    var _definition = _ref[0],
        node = _ref[1];
    var transformedNode = moduleMap != null ? CodeMarker.transform(node, moduleMap) : node;
    documentMap[node.kind === 'Request' ? node.params.name : node.name] = transformedNode;
  });
  return documentMap;
}

module.exports = {
  generateAndCompile: generateAndCompile,
  generateWithTransforms: generateWithTransforms
};