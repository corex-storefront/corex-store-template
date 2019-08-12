/**
 * @flow
 * @relayHash 8b0fe58e991678b0d1f971d7bc705d80
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Cart_cart$ref = any;
type Content_viewer$ref = any;
type Menu_taxonomy$ref = any;
type PDP_viewer$ref = any;
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
export type Store_QueryVariables = {|
  ssid?: ?string,
  first?: ?number,
  sort?: ?$ReadOnlyArray<?Sort>,
  after?: ?any,
  query?: ?string,
  product?: ?string,
  filters?: ?$ReadOnlyArray<?Filter>,
  templateuri?: ?string,
|};
export type Store_QueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +token: ?string,
    +claims: ?$ReadOnlyArray<?{|
      +id: ?string,
      +value: ?string,
    |}>,
    +roles: ?{|
      +admin: ?string,
      +owner: ?string,
      +tester: ?string,
      +checkoutTester: ?string,
    |},
    +cart: ?{|
      +$fragmentRefs: Cart_cart$ref
    |},
    +taxonomy: ?$ReadOnlyArray<?{|
      +$fragmentRefs: Menu_taxonomy$ref
    |}>,
    +$fragmentRefs: Content_viewer$ref & PDP_viewer$ref & PLP_viewer$ref,
  |}
|};
export type Store_Query = {|
  variables: Store_QueryVariables,
  response: Store_QueryResponse,
|};
*/


/*
query Store_Query(
  $ssid: ID
  $first: Int
  $sort: [Sort]
  $after: Cursor
  $query: String
  $product: String
  $filters: [Filter]
  $templateuri: String
) {
  viewer(id: $ssid) {
    id
    token
    claims {
      id
      value
    }
    roles {
      admin
      owner
      tester
      checkoutTester
    }
    cart {
      ...Cart_cart
      id
    }
    taxonomy {
      ...Menu_taxonomy
      id
    }
    ...Content_viewer_B1Ngf
    ...PDP_viewer_2DVCXa
    ...PLP_viewer_wVre4
  }
}

fragment Cart_cart on Cart {
  id
  qty
  updatedAt
  items {
    ...CartItem_item
    id
  }
  subtotal
  delivery
  sales
  total
}

fragment Menu_taxonomy on Taxonomy {
  id
  index
  name
  url
  childrens {
    name
    index
    url
    childrens {
      name
      index
      url
      id
    }
    id
  }
}

fragment Content_viewer_B1Ngf on viewer {
  template(uri: $templateuri) {
    id
    uri
    requestedUri
    cubes {
      id
      cubeId
      blocks {
        type
        displayname
        value
        props {
          type
          displayname
          value
          props {
            type
            displayname
            value
            props {
              type
              displayname
              value
            }
          }
        }
      }
    }
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

fragment PLP_viewer_wVre4 on viewer {
  productList(first: $first, query: $query, sort: $sort, after: $after, filters: $filters) {
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

fragment CartItem_item on CartItem {
  id
  sku
  qty
  price
  listPrice
  total
  subtotal
  sales
  volume
  weight
  totalVolume
  totalWeight
  data {
    name
    uri
    image
  }
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
    "name": "product",
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
    "name": "templateuri",
    "type": "String",
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
  "name": "token",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "claims",
  "storageKey": null,
  "args": null,
  "concreteType": "Claim",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v4/*: any*/)
  ]
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "roles",
  "storageKey": null,
  "args": null,
  "concreteType": "Roles",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "admin",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "owner",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "tester",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "checkoutTester",
      "args": null,
      "storageKey": null
    }
  ]
},
v7 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
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
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "qty",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sku",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "price",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "listPrice",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "total",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "subtotal",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sales",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "uri",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "index",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "displayname",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasDiscount",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "discountRate",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "units",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rgb",
  "args": null,
  "storageKey": null
},
v26 = [
  (v4/*: any*/),
  (v24/*: any*/),
  (v20/*: any*/),
  (v25/*: any*/),
  (v15/*: any*/),
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
],
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v29 = {
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
    "name": "Store_Query",
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cart",
            "storageKey": null,
            "args": null,
            "concreteType": "Cart",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Cart_cart",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "taxonomy",
            "storageKey": null,
            "args": null,
            "concreteType": "Taxonomy",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Menu_taxonomy",
                "args": null
              }
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "Content_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "templateuri",
                "variableName": "templateuri"
              }
            ]
          },
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
          },
          {
            "kind": "FragmentSpread",
            "name": "PLP_viewer",
            "args": (v7/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Store_Query",
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
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cart",
            "storageKey": null,
            "args": null,
            "concreteType": "Cart",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v8/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "updatedAt",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "items",
                "storageKey": null,
                "args": null,
                "concreteType": "CartItem",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v9/*: any*/),
                  (v8/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "volume",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "weight",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "totalVolume",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "totalWeight",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "data",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Product",
                    "plural": false,
                    "selections": [
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/)
                    ]
                  }
                ]
              },
              (v13/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "delivery",
                "args": null,
                "storageKey": null
              },
              (v14/*: any*/),
              (v12/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "taxonomy",
            "storageKey": null,
            "args": null,
            "concreteType": "Taxonomy",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v18/*: any*/),
              (v15/*: any*/),
              (v19/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "childrens",
                "storageKey": null,
                "args": null,
                "concreteType": "Taxonomy",
                "plural": true,
                "selections": [
                  (v15/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "childrens",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Taxonomy",
                    "plural": true,
                    "selections": [
                      (v15/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v2/*: any*/)
                    ]
                  },
                  (v2/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "template",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "uri",
                "variableName": "templateuri"
              }
            ],
            "concreteType": "Template",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v16/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "requestedUri",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cubes",
                "storageKey": null,
                "args": null,
                "concreteType": "Cube",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cubeId",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "blocks",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Block",
                    "plural": true,
                    "selections": [
                      (v20/*: any*/),
                      (v21/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "props",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Block",
                        "plural": true,
                        "selections": [
                          (v20/*: any*/),
                          (v21/*: any*/),
                          (v4/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "props",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Block",
                            "plural": true,
                            "selections": [
                              (v20/*: any*/),
                              (v21/*: any*/),
                              (v4/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "props",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Block",
                                "plural": true,
                                "selections": [
                                  (v20/*: any*/),
                                  (v21/*: any*/),
                                  (v4/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
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
              (v15/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v22/*: any*/),
              (v23/*: any*/),
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
                  (v15/*: any*/),
                  (v20/*: any*/),
                  (v4/*: any*/),
                  (v24/*: any*/),
                  (v25/*: any*/)
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
                  (v4/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "brand",
                "args": null,
                "storageKey": null
              },
              (v17/*: any*/),
              (v8/*: any*/),
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
                    "selections": (v26/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "values",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Attribute",
                    "plural": true,
                    "selections": (v26/*: any*/)
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "productList",
            "storageKey": null,
            "args": (v7/*: any*/),
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
                      (v2/*: any*/),
                      (v9/*: any*/),
                      (v16/*: any*/),
                      (v15/*: any*/),
                      (v17/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v22/*: any*/),
                      (v23/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  (v27/*: any*/)
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
                  (v27/*: any*/)
                ]
              },
              (v28/*: any*/),
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
                  (v2/*: any*/),
                  (v29/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "buckets",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Bucket",
                    "plural": true,
                    "selections": [
                      (v29/*: any*/),
                      (v28/*: any*/),
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
            "args": (v7/*: any*/),
            "handle": "connection",
            "key": "PLP_productList",
            "filters": [
              "query",
              "filters",
              "defaultFilter",
              "attributes"
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "Store_Query",
    "id": null,
    "text": "query Store_Query(\n  $ssid: ID\n  $first: Int\n  $sort: [Sort]\n  $after: Cursor\n  $query: String\n  $product: String\n  $filters: [Filter]\n  $templateuri: String\n) {\n  viewer(id: $ssid) {\n    id\n    token\n    claims {\n      id\n      value\n    }\n    roles {\n      admin\n      owner\n      tester\n      checkoutTester\n    }\n    cart {\n      ...Cart_cart\n      id\n    }\n    taxonomy {\n      ...Menu_taxonomy\n      id\n    }\n    ...Content_viewer_B1Ngf\n    ...PDP_viewer_2DVCXa\n    ...PLP_viewer_wVre4\n  }\n}\n\nfragment Cart_cart on Cart {\n  id\n  qty\n  updatedAt\n  items {\n    ...CartItem_item\n    id\n  }\n  subtotal\n  delivery\n  sales\n  total\n}\n\nfragment Menu_taxonomy on Taxonomy {\n  id\n  index\n  name\n  url\n  childrens {\n    name\n    index\n    url\n    childrens {\n      name\n      index\n      url\n      id\n    }\n    id\n  }\n}\n\nfragment Content_viewer_B1Ngf on viewer {\n  template(uri: $templateuri) {\n    id\n    uri\n    requestedUri\n    cubes {\n      id\n      cubeId\n      blocks {\n        type\n        displayname\n        value\n        props {\n          type\n          displayname\n          value\n          props {\n            type\n            displayname\n            value\n            props {\n              type\n              displayname\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment PDP_viewer_2DVCXa on viewer {\n  product(id: $product) {\n    id\n    name\n    price\n    listPrice\n    hasDiscount\n    discountRate\n    description\n    model\n    hasVariations\n    attributes {\n      name\n      type\n      value\n      units\n      rgb\n    }\n    benefits {\n      value\n    }\n    brand\n    image\n    qty\n    variations {\n      field\n      selectedAttribute {\n        value\n        units\n        type\n        rgb\n        name\n        displayValue\n        selected\n      }\n      values {\n        value\n        units\n        type\n        rgb\n        name\n        displayValue\n        selected\n      }\n    }\n  }\n}\n\nfragment PLP_viewer_wVre4 on viewer {\n  productList(first: $first, query: $query, sort: $sort, after: $after, filters: $filters) {\n    edges {\n      node {\n        id\n        ...Item_item\n        __typename\n      }\n      cursor\n    }\n    totalPages\n    currentPage\n    pages {\n      page\n      cursor\n    }\n    count\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n      finalCursor\n      currentQuery\n    }\n    suggest {\n      text\n      highlighted\n      score\n    }\n    facets {\n      id\n      displayName\n      buckets {\n        displayName\n        count\n        localCount\n        isAvailable\n      }\n    }\n  }\n}\n\nfragment Item_item on Product {\n  id\n  sku\n  uri\n  name\n  image\n  price\n  listPrice\n  hasDiscount\n  discountRate\n}\n\nfragment CartItem_item on CartItem {\n  id\n  sku\n  qty\n  price\n  listPrice\n  total\n  subtotal\n  sales\n  volume\n  weight\n  totalVolume\n  totalWeight\n  data {\n    name\n    uri\n    image\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17bd1876b0f8a8d661afef0380e53b1e';
module.exports = node;
