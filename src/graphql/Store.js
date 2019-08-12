import graphql from 'babel-plugin-relay/macro';

const operation = graphql`
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
      }
      taxonomy {
        ...Menu_taxonomy
      }
      ...Content_viewer @arguments(templateuri: $templateuri)
      ...PDP_viewer @arguments(product: $product)
      ...PLP_viewer
        @arguments(first: $first, query: $query, sort: $sort, after: $after, filters: $filters)
    }
  }
`;

export default operation;
