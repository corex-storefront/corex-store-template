/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * 
 * @format
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var invariant = require("fbjs/lib/invariant");

var _require = require("relay-runtime"),
    TYPENAME_KEY = _require.TYPENAME_KEY,
    RelayConcreteNode = _require.RelayConcreteNode,
    getModuleComponentKey = _require.getModuleComponentKey,
    getModuleOperationKey = _require.getModuleOperationKey;

var CONDITION = RelayConcreteNode.CONDITION,
    CONNECTION_FIELD = RelayConcreteNode.CONNECTION_FIELD,
    CLIENT_EXTENSION = RelayConcreteNode.CLIENT_EXTENSION,
    INLINE_FRAGMENT = RelayConcreteNode.INLINE_FRAGMENT,
    LINKED_FIELD = RelayConcreteNode.LINKED_FIELD,
    MODULE_IMPORT = RelayConcreteNode.MODULE_IMPORT,
    SCALAR_FIELD = RelayConcreteNode.SCALAR_FIELD,
    LINKED_HANDLE = RelayConcreteNode.LINKED_HANDLE,
    SCALAR_HANDLE = RelayConcreteNode.SCALAR_HANDLE,
    DEFER = RelayConcreteNode.DEFER,
    STREAM = RelayConcreteNode.STREAM;

function createIdGenerator() {
  var id = 0;
  return function () {
    return ++id;
  };
}

var DEFAULT_MOCK_RESOLVERS = {
  ID: function ID(context, generateId) {
    return "<".concat(context.parentType != null && context.parentType !== DEFAULT_MOCK_TYPENAME ? context.parentType + '-' : '', "mock-id-").concat(generateId(), ">");
  },
  Boolean: function Boolean() {
    return false;
  },
  Int: function Int() {
    return 42;
  },
  Float: function Float() {
    return 4.2;
  }
};
var DEFAULT_MOCK_TYPENAME = '__MockObject';
/**
 * Basic value resolver
 */

function valueResolver(generateId, mockResolvers, typeName, context) {
  var plural = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var defaultValue = arguments.length > 5 ? arguments[5] : undefined;

  var generateValue = function generateValue(possibleDefaultValue) {
    var mockValue;
    var mockResolver = typeName != null && mockResolvers != null ? mockResolvers[typeName] : null;

    if (mockResolver != null) {
      mockValue = mockResolver(context, generateId);
    }

    if (mockValue === undefined) {
      var _possibleDefaultValue, _ref, _context$alias;

      mockValue = (_possibleDefaultValue = possibleDefaultValue) !== null && _possibleDefaultValue !== void 0 ? _possibleDefaultValue : typeName === 'ID' ? DEFAULT_MOCK_RESOLVERS.ID(context, generateId) : "<mock-value-for-field-\"".concat((_ref = (_context$alias = context.alias) !== null && _context$alias !== void 0 ? _context$alias : context.name) !== null && _ref !== void 0 ? _ref : 'undefined', "\">");
    }

    return mockValue;
  };

  return plural === true ? generateMockList(Array.isArray(defaultValue) ? defaultValue : Array(1).fill(), generateValue) : generateValue(defaultValue);
}

function createValueResolver(mockResolvers) {
  var generateId = createIdGenerator();
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return valueResolver.apply(void 0, [generateId, mockResolvers].concat(args));
  };
}

function generateMockList(placeholderArray, generateListItem) {
  return placeholderArray.map(function (possibleDefaultValue) {
    return generateListItem(possibleDefaultValue);
  });
}

var RelayMockPayloadGenerator =
/*#__PURE__*/
function () {
  function RelayMockPayloadGenerator(options) {
    var _options$mockResolver, _options$selectionMet;

    this._variables = options.variables;
    this._mockResolvers = (0, _objectSpread3["default"])({}, DEFAULT_MOCK_RESOLVERS, (_options$mockResolver = options.mockResolvers) !== null && _options$mockResolver !== void 0 ? _options$mockResolver : {});
    this._selectionMetadata = (_options$selectionMet = options.selectionMetadata) !== null && _options$selectionMet !== void 0 ? _options$selectionMet : {};
    this._resolveValue = createValueResolver(this._mockResolvers);
  }

  var _proto = RelayMockPayloadGenerator.prototype;

  _proto.generate = function generate(selections, operationType) {
    var defaultValues = this._getDefaultValuesForObject(operationType, null, null, [], // path
    {});

    return this._traverse({
      selections: selections,
      typeName: operationType,
      isAbstractType: false,
      name: null,
      alias: null,
      args: null
    }, [], // path
    null, // prevData
    defaultValues);
  };

  _proto._traverse = function _traverse(traversable, path, prevData, defaultValues) {
    var selections = traversable.selections,
        typeName = traversable.typeName,
        isAbstractType = traversable.isAbstractType;
    return this._traverseSelections(selections, typeName, isAbstractType, path, prevData, defaultValues);
  }
  /**
   * Generate mock values for selection of fields
   */
  ;

  _proto._traverseSelections = function _traverseSelections(selections, typeName, isAbstractType, path, prevData, defaultValues) {
    var _this = this;

    var _prevData;

    var mockData = (_prevData = prevData) !== null && _prevData !== void 0 ? _prevData : {};
    selections.forEach(function (selection) {
      switch (selection.kind) {
        case SCALAR_FIELD:
          {
            mockData = _this._mockScalar(selection, typeName, path, mockData, defaultValues);
            break;
          }

        case CONNECTION_FIELD:
        case LINKED_FIELD:
          {
            mockData = _this._mockLink(selection, path, mockData, defaultValues);
            break;
          }

        case CONDITION:
          var conditionValue = _this._getVariableValue(selection.condition);

          if (conditionValue === selection.passingValue) {
            mockData = _this._traverseSelections(selection.selections, typeName, isAbstractType, path, mockData, defaultValues);
          }

          break;

        case CLIENT_EXTENSION:
        case DEFER:
        case STREAM:
          {
            mockData = _this._traverseSelections(selection.selections, typeName, isAbstractType, path, mockData, defaultValues);
            break;
          }

        case INLINE_FRAGMENT:
          {
            // If it's the first time we're trying to handle fragment spread
            // on this selection, we will generate data for this type.
            // Next fragment spread on this selection will be added only if the
            // types are matching
            if (mockData != null && (mockData[TYPENAME_KEY] == null || mockData[TYPENAME_KEY] === DEFAULT_MOCK_TYPENAME)) {
              var _ref2;

              mockData[TYPENAME_KEY] = (_ref2 = defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues[TYPENAME_KEY]) !== null && _ref2 !== void 0 ? _ref2 : selection.type;
            } // Now, we need to make sure that we don't select abstract type
            // for inline fragments


            if (isAbstractType === true && mockData != null && mockData[TYPENAME_KEY] === typeName) {
              mockData[TYPENAME_KEY] = selection.type;
            }

            if (mockData != null && mockData[TYPENAME_KEY] === selection.type) {
              // This will get default values for current selection type
              var defaults = _this._getDefaultValuesForObject(selection.type, path[path.length - 1], null, path); // Also, if the selection has an abstract type
              // we may have mock resolvers for it


              var defaultsForAbstractType = typeName !== selection.type ? _this._getDefaultValuesForObject(typeName, path[path.length - 1], null, path) : defaults; // Now let's select which defaults we're going to use
              // for the selections

              var defaultValuesForSelection = defaults; // First, defaults for
              // concrete type of the selection

              if (defaultValuesForSelection === undefined) {
                // Second, defaults for abstract type of the selection
                defaultValuesForSelection = defaultsForAbstractType;
              } // And last, values from the parent mock resolver


              if (defaultValuesForSelection === undefined) {
                defaultValuesForSelection = defaultValues;
              } // Now, if the default value for the type is explicit null,
              // we may skip traversing child selection


              if (defaultValuesForSelection === null) {
                mockData = null;
                break;
              }

              mockData = _this._traverseSelections(selection.selections, selection.type, isAbstractType, path, mockData, defaultValuesForSelection);

              if (mockData[TYPENAME_KEY] != null) {
                mockData[TYPENAME_KEY] = selection.type;
              } // Make sure we're using id form the default values, an
              // ID may be referenced in the same selection as InlineFragment


              if (mockData.id != null && defaults != null && defaults.id != null) {
                mockData.id = defaults.id;
              }
            }

            break;
          }

        case MODULE_IMPORT:
          // Explicit `null` of `defaultValues` handled in the INLINE_FRAGMENT
          if (defaultValues != null) {
            var _objectSpread2;

            if (defaultValues.__typename !== typeName) {
              break;
            } // In order to mock 3d payloads, we need to receive an object with
            // the type `NormalizationSplitOperation` from mock resolvers.
            // In this case, we can traverse into its selection
            // and generated payloads for it.


            var operation = defaultValues.__module_operation; // Basic sanity checks of the provided default value.
            // It should look like NormalizationSplitOperation

            !(typeof operation === 'object' && operation !== null && operation.kind === 'SplitOperation' && Array.isArray(operation.selections) && typeof operation.name === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayMockPayloadGenerator(): Unexpected default value for ' + 'a field `__module_operation` in the mock resolver for ' + '@module dependency. Provided value is "%s" and we\'re ' + 'expecting an object of a type `NormalizationSplitOperation`. ' + 'Please adjust mock resolver for the type "%s". ' + 'Typically it should require a file "%s$normalization.graphql".', JSON.stringify(operation), typeName, selection.fragmentName) : invariant(false) : void 0;
            var splitOperation = operation;
            var documentName = selection.documentName;

            if (mockData == null) {
              mockData = {};
            }

            mockData = (0, _objectSpread3["default"])({}, mockData, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, TYPENAME_KEY, typeName), (0, _defineProperty2["default"])(_objectSpread2, getModuleOperationKey(documentName), operation.name), (0, _defineProperty2["default"])(_objectSpread2, getModuleComponentKey(documentName), defaultValues.__module_component), _objectSpread2), _this._traverseSelections(splitOperation.selections, typeName, false, path, null, null));
          }

          break;

        case SCALAR_HANDLE:
        case LINKED_HANDLE:
          break;

        default:
          selection;
          !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayMockPayloadGenerator(): Unexpected AST kind `%s`.', selection.kind) : invariant(false) : void 0;
      }
    });
    return mockData;
  }
  /**
   * Generate default enum value
   * @private
   */
  ;

  _proto._getCorrectDefaultEnum = function _getCorrectDefaultEnum(enumValues, value, path, applicationName) {
    if (value === undefined) {
      return value;
    }

    var valueToValidate = Array.isArray(value) ? value.map(function (v) {
      return String(v).toUpperCase();
    }) : [String(value).toUpperCase()];
    var enumValuesNormalized = enumValues.map(function (s) {
      return s.toUpperCase();
    }); // Let's validate the correctness of the provided enum value
    // We will throw if value provided by mock resolvers is invalid

    var correctValues = valueToValidate.filter(function (v) {
      return enumValuesNormalized.includes(v);
    });

    if (correctValues.length !== valueToValidate.length) {
      !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayMockPayloadGenerator: Invalid value "%s" provided for enum ' + 'field "%s" via MockResolver.' + 'Expected one of the following values: %s.', value, "".concat(path.join('.'), ".").concat(applicationName), enumValues.map(function (v) {
        return "\"".concat(v, "\"");
      }).join(', ')) : invariant(false) : void 0;
    } // But missing case should be acceptable, we will just use
    // a correct spelling from enumValues


    var correctSpellingValues = valueToValidate.map(function (v) {
      var correctSpellingEnumIndex = enumValuesNormalized.indexOf(String(v).toUpperCase());
      return enumValues[correctSpellingEnumIndex];
    });
    return Array.isArray(value) ? correctSpellingValues : correctSpellingValues[0];
  }
  /**
   * Generate mock value for a scalar field in the selection
   */
  ;

  _proto._mockScalar = function _mockScalar(field, typeName, path, mockData, defaultValues) {
    var _mockData, _field$alias;

    var data = (_mockData = mockData) !== null && _mockData !== void 0 ? _mockData : {};
    var applicationName = (_field$alias = field.alias) !== null && _field$alias !== void 0 ? _field$alias : field.name;

    if (data.hasOwnProperty(applicationName) && field.name !== TYPENAME_KEY) {
      return data;
    }

    var value; // For __typename fields we are going to return typeName

    if (field.name === TYPENAME_KEY) {
      var _typeName;

      value = (_typeName = typeName) !== null && _typeName !== void 0 ? _typeName : DEFAULT_MOCK_TYPENAME;
    }

    var selectionPath = [].concat((0, _toConsumableArray2["default"])(path), [applicationName]);

    var _this$_getScalarField = this._getScalarFieldTypeDetails(field, typeName, selectionPath),
        type = _this$_getScalarField.type,
        plural = _this$_getScalarField.plural,
        enumValues = _this$_getScalarField.enumValues; // We may have an object with default values (generated in _mockLink(...))
    // let's check if we have a possible default value there for our field


    if (defaultValues != null && defaultValues.hasOwnProperty(applicationName)) {
      value = defaultValues[applicationName];

      if (enumValues != null) {
        value = this._getCorrectDefaultEnum(enumValues, value, path, applicationName);
      } // And if it's a plural field, we need to return an array


      if (value !== undefined && plural && !Array.isArray(value)) {
        value = [value];
      }
    } // If the value has not been generated yet (__id, __typename fields, or defaults)
    // then we need to generate mock value for a scalar type


    if (value === undefined) {
      // Get basic type information: type of the field (Int, Float, String, etc..)
      // And check if it's a plural type
      var _defaultValue = enumValues != null ? enumValues[0] : undefined;

      value = this._resolveValue( // If we don't have schema let's assume that fields with name (id, __id)
      // have type ID
      type, {
        parentType: typeName,
        name: field.name,
        alias: field.alias,
        path: selectionPath,
        args: this._getFieldArgs(field)
      }, plural, _defaultValue);
    }

    data[applicationName] = value;
    return data;
  }
  /**
   * Generate mock data for linked fields in the selection
   */
  ;

  _proto._mockLink = function _mockLink(field, path, prevData, defaultValues) {
    var _this2 = this;

    var _field$alias2, _prevData2, _this$_selectionMetad, _field$concreteType;

    var applicationName = (_field$alias2 = field.alias) !== null && _field$alias2 !== void 0 ? _field$alias2 : field.name;
    var data = (_prevData2 = prevData) !== null && _prevData2 !== void 0 ? _prevData2 : {};

    var args = this._getFieldArgs(field); // Let's check if we have a custom mock resolver for the object type
    // We will pass this data down to selection, so _mockScalar(...) can use
    // values from `defaults`


    var selectionPath = [].concat((0, _toConsumableArray2["default"])(path), [applicationName]);
    var typeFromSelection = (_this$_selectionMetad = this._selectionMetadata[selectionPath.join('.')]) !== null && _this$_selectionMetad !== void 0 ? _this$_selectionMetad : {
      type: DEFAULT_MOCK_TYPENAME
    };
    var defaults;

    if (defaultValues != null && typeof defaultValues[applicationName] === 'object') {
      defaults = defaultValues[applicationName];
    } // In cases when we have explicit `null` in the defaults - let's return
    // null for full branch


    if (defaults === null) {
      data[applicationName] = null;
      return data;
    } // If concrete type is null, let's try to get if from defaults,
    // and fallback to default object type


    var typeName = (_field$concreteType = field.concreteType) !== null && _field$concreteType !== void 0 ? _field$concreteType : defaults != null && typeof defaults[TYPENAME_KEY] === 'string' ? defaults[TYPENAME_KEY] : typeFromSelection.type; // Let's assume, that if the concrete type is null and selected type name is
    // different from type information form selection, most likely this type
    // information came from mock resolver __typename value and it was
    // an intentional selection of the specific type

    var isAbstractType = field.concreteType === null && typeName === typeFromSelection.type;

    var generateDataForField = function generateDataForField(possibleDefaultValue) {
      var _this$_getDefaultValu, _field$concreteType2;

      var fieldDefaultValue = (_this$_getDefaultValu = _this2._getDefaultValuesForObject((_field$concreteType2 = field.concreteType) !== null && _field$concreteType2 !== void 0 ? _field$concreteType2 : typeFromSelection.type, field.name, field.alias, selectionPath, args)) !== null && _this$_getDefaultValu !== void 0 ? _this$_getDefaultValu : possibleDefaultValue;

      if (fieldDefaultValue === null) {
        return null;
      }

      return _this2._traverse({
        selections: field.selections,
        typeName: typeName,
        isAbstractType: isAbstractType,
        name: field.name,
        alias: field.alias,
        args: args
      }, [].concat((0, _toConsumableArray2["default"])(path), [applicationName]),
      /* $FlowFixMe(>=0.98.0 site=react_native_fb,oss,www,mobile) This comment suppresses an
       * error found when Flow v0.98 was deployed. To see the error delete
       * this comment and run Flow. */
      typeof data[applicationName] === 'object' ? data[applicationName] : null,
      /* $FlowFixMe(>=0.98.0 site=react_native_fb,oss,www,mobile) This comment suppresses an
       * error found when Flow v0.98 was deployed. To see the error delete
       * this comment and run Flow. */
      fieldDefaultValue);
    };

    data[applicationName] = field.kind === 'LinkedField' && field.plural ? generateMockList(Array.isArray(defaults) ? defaults : Array(1).fill(), generateDataForField) : generateDataForField(defaults);
    return data;
  }
  /**
   * Get the value for a variable by name
   */
  ;

  _proto._getVariableValue = function _getVariableValue(name) {
    !this._variables.hasOwnProperty(name) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayMockPayloadGenerator(): Undefined variable `%s`.', name) : invariant(false) : void 0;
    return this._variables[name];
  }
  /**
   * This method should call mock resolver for a specific type name
   * and the result of this mock resolver will be passed as a default values for
   * _mock*(...) methods
   */
  ;

  _proto._getDefaultValuesForObject = function _getDefaultValuesForObject(typeName, fieldName, fieldAlias, path, args) {
    var data;

    if (typeName != null && this._mockResolvers[typeName] != null) {
      data = this._resolveValue(typeName, {
        parentType: null,
        name: fieldName,
        alias: fieldAlias,
        args: args,
        path: path
      }, false);
    }

    if (typeof data === 'object') {
      /* $FlowFixMe(>=0.98.0 site=react_native_fb,oss,www,mobile) This comment suppresses an
       * error found when Flow v0.98 was deployed. To see the error delete this
       * comment and run Flow. */
      return data;
    }
  }
  /**
   * Get object with variables for field
   */
  ;

  _proto._getFieldArgs = function _getFieldArgs(field) {
    var _this3 = this;

    var args = {};

    if (field.args != null) {
      field.args.forEach(function (arg) {
        args[arg.name] = arg.kind === 'Literal' ? arg.value : _this3._getVariableValue(arg.variableName);
      });
    }

    return args;
  }
  /**
   * Helper function to get field type information (name of the type, plural)
   */
  ;

  _proto._getScalarFieldTypeDetails = function _getScalarFieldTypeDetails(field, typeName, selectionPath) {
    var _this$_selectionMetad2;

    return (_this$_selectionMetad2 = this._selectionMetadata[selectionPath.join('.')]) !== null && _this$_selectionMetad2 !== void 0 ? _this$_selectionMetad2 : {
      type: field.name === 'id' ? 'ID' : 'String',
      plural: false,
      enumValues: null,
      nullable: false
    };
  };

  return RelayMockPayloadGenerator;
}();
/**
 * Generate mock data for NormalizationOperation selection
 */


function generateData(node, variables, mockResolvers, selectionMetadata) {
  var mockGenerator = new RelayMockPayloadGenerator({
    variables: variables,
    mockResolvers: mockResolvers,
    selectionMetadata: selectionMetadata
  });
  var operationType;

  if (node.name.endsWith('Mutation')) {
    operationType = 'Mutation';
  } else if (node.name.endsWith('Subscription')) {
    operationType = 'Subscription';
  } else {
    operationType = 'Query';
  }

  return mockGenerator.generate(node.selections, operationType);
}
/**
 * Type refinement for selection metadata
 */


function getSelectionMetadataFromOperation(operation) {
  var _operation$request$no;

  var selectionTypeInfo = (_operation$request$no = operation.request.node.params.metadata) === null || _operation$request$no === void 0 ? void 0 : _operation$request$no.relayTestingSelectionTypeInfo;

  if (selectionTypeInfo != null && !Array.isArray(selectionTypeInfo) && typeof selectionTypeInfo === 'object') {
    var selectionMetadata = {};
    Object.keys(selectionTypeInfo).forEach(function (path) {
      var item = selectionTypeInfo[path];

      if (item != null && !Array.isArray(item) && typeof item === 'object') {
        if (typeof item.type === 'string' && typeof item.plural === 'boolean' && typeof item.nullable === 'boolean' && (item.enumValues === null || Array.isArray(item.enumValues))) {
          selectionMetadata[path] = {
            type: item.type,
            plural: item.plural,
            nullable: item.nullable,
            enumValues: Array.isArray(item.enumValues) ? item.enumValues.map(String) : null
          };
        }
      }
    });
    return selectionMetadata;
  }

  return null;
}

function generateDataForOperation(operation, mockResolvers) {
  var _mockResolvers;

  var data = generateData(operation.request.node.operation, operation.request.variables, (_mockResolvers = mockResolvers) !== null && _mockResolvers !== void 0 ? _mockResolvers : null, getSelectionMetadataFromOperation(operation));
  return {
    data: data
  };
}

module.exports = {
  generate: generateDataForOperation
};