/**
 * @flow
 * @relayHash 2b1eded10d2c6a0fd9fc2943f33f01c1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Content_viewer$ref = any;
export type Content_Refetch_QueryVariables = {|
  templateuri?: ?string,
  ssid?: ?string,
|};
export type Content_Refetch_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Content_viewer$ref
  |}
|};
export type Content_Refetch_Query = {|
  variables: Content_Refetch_QueryVariables,
  response: Content_Refetch_QueryResponse,
|};
*/


/*
query Content_Refetch_Query(
  $templateuri: String
  $ssid: ID
) {
  viewer(id: $ssid) {
    ...Content_viewer_B1Ngf
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "templateuri",
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
  "name": "type",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "displayname",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "Content_Refetch_Query",
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
            "name": "Content_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "templateuri",
                "variableName": "templateuri"
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Content_Refetch_Query",
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "props",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Block",
                        "plural": true,
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "props",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Block",
                            "plural": true,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "props",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Block",
                                "plural": true,
                                "selections": [
                                  (v3/*: any*/),
                                  (v4/*: any*/),
                                  (v5/*: any*/)
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
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "Content_Refetch_Query",
    "id": null,
    "text": "query Content_Refetch_Query(\n  $templateuri: String\n  $ssid: ID\n) {\n  viewer(id: $ssid) {\n    ...Content_viewer_B1Ngf\n    id\n  }\n}\n\nfragment Content_viewer_B1Ngf on viewer {\n  template(uri: $templateuri) {\n    id\n    uri\n    requestedUri\n    cubes {\n      id\n      cubeId\n      blocks {\n        type\n        displayname\n        value\n        props {\n          type\n          displayname\n          value\n          props {\n            type\n            displayname\n            value\n            props {\n              type\n              displayname\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e4aee435ff4e5682027be20bee9f9a87';
module.exports = node;
