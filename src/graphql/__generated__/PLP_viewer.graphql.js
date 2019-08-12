/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Item_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PLP_viewer$ref: FragmentReference;
declare export opaque type PLP_viewer$fragmentType: PLP_viewer$ref;
export type PLP_viewer = {|
  +productList: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: ?string,
        +$fragmentRefs: Item_item$ref,
      |}
    |}>,
    +totalPages: ?number,
    +currentPage: ?number,
    +pages: ?$ReadOnlyArray<?{|
      +page: ?number,
      +cursor: ?number,
    |}>,
    +count: ?number,
    +pageInfo: ?{|
      +hasNextPage: ?boolean,
      +hasPreviousPage: ?boolean,
      +startCursor: ?any,
      +endCursor: ?any,
      +finalCursor: ?any,
      +currentQuery: ?string,
    |},
    +suggest: ?{|
      +text: ?string,
      +highlighted: ?string,
      +score: ?number,
    |},
    +facets: ?$ReadOnlyArray<?{|
      +id: ?string,
      +displayName: ?string,
      +buckets: ?$ReadOnlyArray<?{|
        +displayName: ?string,
        +count: ?number,
        +localCount: ?number,
        +isAvailable: ?boolean,
      |}>,
    |}>,
  |},
  +$refType: PLP_viewer$ref,
|};
export type PLP_viewer$data = PLP_viewer;
export type PLP_viewer$key = {
  +$data?: PLP_viewer$data,
  +$fragmentRefs: PLP_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "displayName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PLP_viewer",
  "type": "viewer",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "productList"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": 20
    },
    {
      "kind": "LocalArgument",
      "name": "query",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "sort",
      "type": "[Sort]",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "after",
      "type": "Cursor",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "filters",
      "type": "[Filter]",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "attributes",
      "type": "[Filter]",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "defaultFilter",
      "type": "Filter",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "productList",
      "name": "__PLP_productList_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "attributes",
          "variableName": "attributes"
        },
        {
          "kind": "Variable",
          "name": "defaultFilter",
          "variableName": "defaultFilter"
        },
        {
          "kind": "Variable",
          "name": "filters",
          "variableName": "filters"
        },
        {
          "kind": "Variable",
          "name": "query",
          "variableName": "query"
        }
      ],
      "concreteType": "productListConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "productListEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Product",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "Item_item",
                  "args": null
                }
              ]
            },
            (v1/*: any*/)
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "totalPages",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "currentPage",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pages",
          "storageKey": null,
          "args": null,
          "concreteType": "PageMetaData",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "page",
              "args": null,
              "storageKey": null
            },
            (v1/*: any*/)
          ]
        },
        (v2/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasPreviousPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "startCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "finalCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "currentQuery",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "suggest",
          "storageKey": null,
          "args": null,
          "concreteType": "Suggest",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "text",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "highlighted",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "score",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "facets",
          "storageKey": null,
          "args": null,
          "concreteType": "Facet",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v3/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "buckets",
              "storageKey": null,
              "args": null,
              "concreteType": "Bucket",
              "plural": true,
              "selections": [
                (v3/*: any*/),
                (v2/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "localCount",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "isAvailable",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '395902f1689e050d7088a66008d6ebc7';
module.exports = node;
