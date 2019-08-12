/**
 * @flow
 * @relayHash 3da4b6fd89da451b31f9b238a3ea6a6d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PDP_viewer$ref = any;
export type PDP_Refetch_QueryVariables = {|
  product?: ?string,
  ssid?: ?string,
|};
export type PDP_Refetch_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PDP_viewer$ref
  |}
|};
export type PDP_Refetch_Query = {|
  variables: PDP_Refetch_QueryVariables,
  response: PDP_Refetch_QueryResponse,
|};
*/


/*
query PDP_Refetch_Query(
  $product: String
  $ssid: ID
) {
  viewer(id: $ssid) {
    ...PDP_viewer_2DVCXa
    id
  }
}

fragment PDP_viewer_2DVCXa on viewer {
  product(id: $product) {
    id
    name
    price
    listPrice
    hasDiscount
    discountRate
    description
    model
    hasVariations
    attributes {
      name
      type
      value
      units
      rgb
    }
    benefits {
      value
    }
    brand
    image
    qty
    variations {
      field
      selectedAttribute {
        value
        units
        type
        rgb
        name
        displayValue
        selected
      }
      values {
        value
        units
        type
        rgb
        name
        displayValue
        selected
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "product",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "ssid",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "ssid"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "units",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rgb",
  "args": null,
  "storageKey": null
},
v8 = [
  (v5/*: any*/),
  (v6/*: any*/),
  (v4/*: any*/),
  (v7/*: any*/),
  (v3/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "displayValue",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "selected",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PDP_Refetch_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PDP_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "product",
                "variableName": "product"
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PDP_Refetch_Query",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "product",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "product"
              }
            ],
            "concreteType": "Product",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "price",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "listPrice",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasDiscount",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "discountRate",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "model",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasVariations",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "attributes",
                "storageKey": null,
                "args": null,
                "concreteType": "Attribute",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "benefits",
                "storageKey": null,
                "args": null,
                "concreteType": "Benefit",
                "plural": true,
                "selections": [
                  (v5/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "brand",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "image",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "qty",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "variations",
                "storageKey": null,
                "args": null,
                "concreteType": "variationAttribute",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "field",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "selectedAttribute",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Attribute",
                    "plural": false,
                    "selections": (v8/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "values",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Attribute",
                    "plural": true,
                    "selections": (v8/*: any*/)
                  }
                ]
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PDP_Refetch_Query",
    "id": null,
    "text": "query PDP_Refetch_Query(\n  $product: String\n  $ssid: ID\n) {\n  viewer(id: $ssid) {\n    ...PDP_viewer_2DVCXa\n    id\n  }\n}\n\nfragment PDP_viewer_2DVCXa on viewer {\n  product(id: $product) {\n    id\n    name\n    price\n    listPrice\n    hasDiscount\n    discountRate\n    description\n    model\n    hasVariations\n    attributes {\n      name\n      type\n      value\n      units\n      rgb\n    }\n    benefits {\n      value\n    }\n    brand\n    image\n    qty\n    variations {\n      field\n      selectedAttribute {\n        value\n        units\n        type\n        rgb\n        name\n        displayValue\n        selected\n      }\n      values {\n        value\n        units\n        type\n        rgb\n        name\n        displayValue\n        selected\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '476f2358dd7b76f706044b0018352d8d';
module.exports = node;
