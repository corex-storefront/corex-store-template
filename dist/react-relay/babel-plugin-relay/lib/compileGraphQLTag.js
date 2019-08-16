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

var createModernNode = require("./createModernNode");
/**
 * Given a graphql`` tagged template literal, replace it with the appropriate
 * runtime artifact.
 */


function compileGraphQLTag(t, path, state, ast) {
  if (ast.definitions.length !== 1) {
    throw new Error('BabelPluginRelay: Expected exactly one definition per graphql tag.');
  }

  var definition = ast.definitions[0];

  if (definition.kind !== 'FragmentDefinition' && definition.kind !== 'OperationDefinition') {
    throw new Error('BabelPluginRelay: Expected a fragment, mutation, query, or ' + 'subscription, got `' + definition.kind + '`.');
  }

  return replaceMemoized(t, path, createAST(t, state, path, definition));
}

function createAST(t, state, path, graphqlDefinition) {
  var isHasteMode = Boolean(state.opts && state.opts.haste);
  var isDevVariable = state.opts && state.opts.isDevVariable;
  var artifactDirectory = state.opts && state.opts.artifactDirectory;
  var buildCommand = state.opts && state.opts.buildCommand || 'relay-compiler'; // Fallback is 'true'

  var isDevelopment = (process.env.BABEL_ENV || process.env.NODE_ENV) !== 'production';
  return createModernNode(t, graphqlDefinition, state, {
    artifactDirectory: artifactDirectory,
    buildCommand: buildCommand,
    isDevelopment: isDevelopment,
    isHasteMode: isHasteMode,
    isDevVariable: isDevVariable
  });
}

function replaceMemoized(t, path, ast) {
  var topScope = path.scope;

  while (topScope.parent) {
    topScope = topScope.parent;
  }

  if (path.scope === topScope) {
    path.replaceWith(ast);
  } else {
    var id = topScope.generateDeclaredUidIdentifier('graphql');
    path.replaceWith(t.logicalExpression('||', id, t.assignmentExpression('=', id, ast)));
  }
}

module.exports = compileGraphQLTag;