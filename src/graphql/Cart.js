import graphql from 'babel-plugin-relay/macro';

const fragment = graphql`
  fragment Cart_cart on Cart {
    id
    qty
    updatedAt
    items {
      ...CartItem_item
    }
    subtotal
    delivery
    sales
    total
  }
`;

export default fragment;
