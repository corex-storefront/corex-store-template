/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Content_viewer$ref: FragmentReference;
declare export opaque type Content_viewer$fragmentType: Content_viewer$ref;
export type Content_viewer = {|
  +template: ?{|
    +id: ?string,
    +uri: string,
    +requestedUri: ?string,
    +cubes: $ReadOnlyArray<?{|
      +id: ?string,
      +cubeId: ?string,
      +blocks: ?$ReadOnlyArray<?{|
        +type: ?string,
        +displayname: ?string,
        +value: ?string,
        +props: ?$ReadOnlyArray<?{|
          +type: ?string,
          +displayname: ?string,
          +value: ?string,
          +props: ?$ReadOnlyArray<?{|
            +type: ?string,
            +displayname: ?string,
            +value: ?string,
            +props: ?$ReadOnlyArray<?{|
              +type: ?string,
              +displayname: ?string,
              +value: ?string,
            |}>,
          |}>,
        |}>,
      |}>,
    |}>,
  |},
  +$refType: Content_viewer$ref,
|};
export type Content_viewer$data = Content_viewer;
export type Content_viewer$key = {
  +$data?: Content_viewer$data,
  +$fragmentRefs: Content_viewer$ref,
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
  "name": "type",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "displayname",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Content_viewer",
  "type": "viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "templateuri",
      "type": "String",
      "defaultValue": null
    }
  ],
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
        (v0/*: any*/),
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
            (v0/*: any*/),
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
                (v1/*: any*/),
                (v2/*: any*/),
                (v3/*: any*/),
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "props",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Block",
                  "plural": true,
                  "selections": [
                    (v1/*: any*/),
                    (v2/*: any*/),
                    (v3/*: any*/),
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "props",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "Block",
                      "plural": true,
                      "selections": [
                        (v1/*: any*/),
                        (v2/*: any*/),
                        (v3/*: any*/),
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "props",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "Block",
                          "plural": true,
                          "selections": [
                            (v1/*: any*/),
                            (v2/*: any*/),
                            (v3/*: any*/)
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '931f033c9ce18098cf78b4f4c6203008';
module.exports = node;
