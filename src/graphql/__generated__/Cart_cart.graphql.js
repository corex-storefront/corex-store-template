/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CartItem_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Cart_cart$ref: FragmentReference;
declare export opaque type Cart_cart$fragmentType: Cart_cart$ref;
export type Cart_cart = {|
  +id: ?string,
  +qty: ?number,
  +updatedAt: ?any,
  +items: ?$ReadOnlyArray<?{|
    +$fragmentRefs: CartItem_item$ref
  |}>,
  +subtotal: ?any,
  +delivery: ?any,
  +sales: ?any,
  +total: ?any,
  +$refType: Cart_cart$ref,
|};
export type Cart_cart$data = Cart_cart;
export type Cart_cart$key = {
  +$data?: Cart_cart$data,
  +$fragmentRefs: Cart_cart$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Cart_cart",
  "type": "Cart",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
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
        {
          "kind": "FragmentSpread",
          "name": "CartItem_item",
          "args": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "subtotal",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "delivery",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sales",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "total",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8154c5d2d9bb1737ec0b535909a58426';
module.exports = node;
