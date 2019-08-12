import graphql from 'babel-plugin-relay/macro';

const fragment = graphql`
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
`;

export default fragment;
