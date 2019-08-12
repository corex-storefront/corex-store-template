/**
 * @flow
 * @relayHash e261024cd757ec256c0930914bb3e4e9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PLP_viewer$ref = any;
export type VectorOrder = "asc" | "desc" | "%future added value";
export type Sort = {|
  property?: ?string,
  value?: ?VectorOrder,
|};
export type Filter = {|
  name?: ?string,
  value?: ?string,
|};
export type PLP_refetch_QueryVariables = {|
  ssid?: ?string,
  first?: ?number,
  sort?: ?$ReadOnlyArray<?Sort>,
  after?: ?any,
  query?: ?string,
  filters?: ?$ReadOnlyArray<?Filter>,
  attributes?: ?$ReadOnlyArray<?Filter>,
  defaultFilter?: ?Filter,
|};
export type PLP_refetch_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PLP_viewer$ref
  |}
|};
export type PLP_refetch_Query = {|
  variables: PLP_refetch_QueryVariables,
  response: PLP_refetch_QueryResponse,
|};
*/


/*
query PLP_refetch_Query(
  $ssid: ID
  $first: Int
  $sort: [Sort]
  $after: Cursor
  $query: String
  $filters: [Filter]
  $attributes: [Filter]
  $defaultFilter: Filter
) {
  viewer(id: $ssid) {
    ...PLP_viewer_26LJob
    id
  }
}

fragment PLP_viewer_26LJob on viewer {
  productList(first: $first, query: $query, sort: $sort, after: $after, filters: $filters, attributes: $attributes, defaultFilter: $defaultFilter) {
    edges {
      node {
        id
        ...Item_item
        __typename
      }
      cursor
    }
    totalPages
    currentPage
    pages {
      page
      cursor
    }
    count
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
      finalCursor
      currentQuery
    }
    suggest {
      text
      highlighted
      score
    }
    facets {
      id
      displayName
      buckets {
        displayName
        count
        localCount
        isAvailable
      }
    }
  }
}

fragment Item_item on Product {
  id
  sku
  uri
  name
  image
  price
  listPrice
  hasDiscount
  discountRate
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "ssid",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
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
    "name": "query",
    "type": "String",
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
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "ssid"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
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
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  },
  {
    "kind": "Variable",
    "name": "sort",
    "variableName": "sort"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "displayName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PLP_refetch_Query",
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
            "name": "PLP_viewer",
            "args": (v2/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PLP_refetch_Query",
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
            "name": "productList",
            "storageKey": null,
            "args": (v2/*: any*/),
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
                      (v3/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "sku",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "uri",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
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
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  (v4/*: any*/)
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
                  (v4/*: any*/)
                ]
              },
              (v5/*: any*/),
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
                  (v3/*: any*/),
                  (v6/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "buckets",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Bucket",
                    "plural": true,
                    "selections": [
                      (v6/*: any*/),
                      (v5/*: any*/),
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
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "productList",
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "PLP_productList",
            "filters": [
              "query",
              "filters",
              "defaultFilter",
              "attributes"
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PLP_refetch_Query",
    "id": null,
    "text": "query PLP_refetch_Query(\n  $ssid: ID\n  $first: Int\n  $sort: [Sort]\n  $after: Cursor\n  $query: String\n  $filters: [Filter]\n  $attributes: [Filter]\n  $defaultFilter: Filter\n) {\n  viewer(id: $ssid) {\n    ...PLP_viewer_26LJob\n    id\n  }\n}\n\nfragment PLP_viewer_26LJob on viewer {\n  productList(first: $first, query: $query, sort: $sort, after: $after, filters: $filters, attributes: $attributes, defaultFilter: $defaultFilter) {\n    edges {\n      node {\n        id\n        ...Item_item\n        __typename\n      }\n      cursor\n    }\n    totalPages\n    currentPage\n    pages {\n      page\n      cursor\n    }\n    count\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n      finalCursor\n      currentQuery\n    }\n    suggest {\n      text\n      highlighted\n      score\n    }\n    facets {\n      id\n      displayName\n      buckets {\n        displayName\n        count\n        localCount\n        isAvailable\n      }\n    }\n  }\n}\n\nfragment Item_item on Product {\n  id\n  sku\n  uri\n  name\n  image\n  price\n  listPrice\n  hasDiscount\n  discountRate\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c8cc97d9d9450221c0ec3a7d51d44749';
module.exports = node;
