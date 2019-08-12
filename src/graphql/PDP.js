import graphql from 'babel-plugin-relay/macro';

const fragment = graphql`
  fragment PDP_viewer on viewer @argumentDefinitions(product: { type: "String" }) {
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
`;

export const refetchQuery = graphql`
  query PDP_Refetch_Query($product: String, $ssid: ID) {
    viewer(id: $ssid) {
      ...PDP_viewer @arguments(product: $product)
    }
  }
`;

export default fragment;
