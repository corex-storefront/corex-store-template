/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Menu_taxonomy$ref: FragmentReference;
declare export opaque type Menu_taxonomy$fragmentType: Menu_taxonomy$ref;
export type Menu_taxonomy = $ReadOnlyArray<{|
  +id: ?string,
  +index: ?number,
  +name: ?string,
  +url: ?string,
  +childrens: ?$ReadOnlyArray<?{|
    +name: ?string,
    +index: ?number,
    +url: ?string,
    +childrens: ?$ReadOnlyArray<?{|
      +name: ?string,
      +index: ?number,
      +url: ?string,
    |}>,
  |}>,
  +$refType: Menu_taxonomy$ref,
|}>;
export type Menu_taxonomy$data = Menu_taxonomy;
export type Menu_taxonomy$key = {
  +$data?: Menu_taxonomy$data,
  +$fragmentRefs: Menu_taxonomy$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "index",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Menu_taxonomy",
  "type": "Taxonomy",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "childrens",
      "storageKey": null,
      "args": null,
      "concreteType": "Taxonomy",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        (v0/*: any*/),
        (v2/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "childrens",
          "storageKey": null,
          "args": null,
          "concreteType": "Taxonomy",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            (v0/*: any*/),
            (v2/*: any*/)
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a877a39d5009d6cec25e04262b7b4564';
module.exports = node;
