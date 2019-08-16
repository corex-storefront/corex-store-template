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

var RelayTestSchemaPath = require("./RelayTestSchemaPath");

var fs = require("fs");

var _require = require("graphql"),
    GraphQLEnumType = _require.GraphQLEnumType,
    GraphQLScalarType = _require.GraphQLScalarType,
    GraphQLSchema = _require.GraphQLSchema,
    Kind = _require.Kind,
    extendSchema = _require.extendSchema,
    parse = _require.parse;

function buildSchema() {
  var CropPosition = new GraphQLEnumType({
    name: 'CropPosition',
    values: {
      TOP: {
        value: 1
      },
      CENTER: {
        value: 2
      },
      BOTTOM: {
        value: 3
      },
      LEFT: {
        value: 4
      },
      RIGHT: {
        value: 5
      }
    }
  });
  var FileExtension = new GraphQLEnumType({
    name: 'FileExtension',
    values: {
      JPG: {
        value: 'jpg'
      },
      PNG: {
        value: 'png'
      }
    }
  });
  var TestEnums = new GraphQLEnumType({
    name: 'TestEnums',
    values: {
      Zuck: {
        value: 'zuck'
      },
      Mark: {
        value: 'mark'
      }
    }
  });
  var schema = new GraphQLSchema({
    types: [CropPosition, FileExtension, TestEnums, GraphQLJSONType]
  });
  schema = extendSchema(schema, parse(fs.readFileSync(RelayTestSchemaPath, 'utf8'))); // AST Builder doesn't allow things undefined in AST to be argument types it
  // seems

  return extendSchema(schema, parse("\n      input ProfilePictureOptions {\n        newName: String\n      }\n\n      extend type User {\n        profilePicture2(\n          size: [Int],\n          preset: PhotoSize\n          cropPosition: CropPosition\n          fileExtension: FileExtension\n          additionalParameters: JSON\n          options: ProfilePictureOptions\n        ): Image\n      }\n\n      extend type Image {\n        test_enums: TestEnums\n      }\n    "));
}

function identity(value) {
  return value;
}

function parseLiteral(ast, variables) {
  switch (ast.kind) {
    case Kind.STRING:
    case Kind.BOOLEAN:
      return ast.value;

    case Kind.INT:
    case Kind.FLOAT:
      return parseFloat(ast.value);

    case Kind.OBJECT:
      {
        var value = Object.create(null);
        ast.fields.forEach(function (field) {
          value[field.name.value] = parseLiteral(field.value, variables);
        });
        return value;
      }

    case Kind.LIST:
      return ast.values.map(function (n) {
        return parseLiteral(n, variables);
      });

    case Kind.NULL:
      return null;

    case Kind.VARIABLE:
      {
        var name = ast.name.value;
        return variables ? variables[name] : undefined;
      }

    default:
      return undefined;
  }
}

var GraphQLJSONType = new GraphQLScalarType({
  name: 'JSON',
  description: 'The `JSON` scalar type represents JSON values as specified by ' + '[ECMA-404](http://www.ecma-international.org/' + 'publications/files/ECMA-ST/ECMA-404.pdf).',
  serialize: identity,
  parseValue: identity,
  parseLiteral: parseLiteral
});
module.exports = buildSchema();