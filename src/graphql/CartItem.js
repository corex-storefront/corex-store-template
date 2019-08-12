import graphql from 'babel-plugin-relay/macro';

const fragment = graphql`
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
`;

export default fragment;
