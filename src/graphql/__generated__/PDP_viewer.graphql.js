/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PDP_viewer$ref: FragmentReference;
declare export opaque type PDP_viewer$fragmentType: PDP_viewer$ref;
export type PDP_viewer = {|
  +product: ?{|
    +id: ?string,
    +name: ?string,
    +price: ?any,
    +listPrice: ?any,
    +hasDiscount: ?boolean,
    +discountRate: ?number,
    +description: ?string,
    +model: ?string,
    +hasVariations: ?boolean,
    +attributes: ?$ReadOnlyArray<?{|
      +name: ?string,
      +type: ?string,
      +value: ?string,
      +units: ?string,
      +rgb: ?string,
    |}>,
    +benefits: ?$ReadOnlyArray<?{|
      +value: ?string
    |}>,
    +brand: ?string,
    +image: ?string,
    +qty: ?number,
    +variations: ?$ReadOnlyArray<?{|
      +field: ?string,
      +selectedAttribute: ?{|
        +value: ?string,
        +units: ?string,
        +type: ?string,
        +rgb: ?string,
        +name: ?string,
        +displayValue: ?string,
        +selected: ?boolean,
      |},
      +values: ?$ReadOnlyArray<?{|
        +value: ?string,
        +units: ?string,
        +type: ?string,
        +rgb: ?string,
        +name: ?string,
        +displayValue: ?string,
        +selected: ?boolean,
      |}>,
    |}>,
  |},
  +$refType: PDP_viewer$ref,
|};
export type PDP_viewer$data = PDP_viewer;
export type PDP_viewer$key = {
  +$data?: PDP_viewer$data,
  +$fragmentRefs: PDP_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "units",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rgb",
  "args": null,
  "storageKey": null
},
v5 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v1/*: any*/),
  (v4/*: any*/),
  (v0/*: any*/),
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
  "kind": "Fragment",
  "name": "PDP_viewer",
  "type": "viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "product",
      "type": "String",
      "defaultValue": null
    }
  ],
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        (v0/*: any*/),
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
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/),
            (v3/*: any*/),
            (v4/*: any*/)
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
            (v2/*: any*/)
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
              "selections": (v5/*: any*/)
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "values",
              "storageKey": null,
              "args": null,
              "concreteType": "Attribute",
              "plural": true,
              "selections": (v5/*: any*/)
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b6179b63af1915e8e6e16a458caa03c6';
module.exports = node;
