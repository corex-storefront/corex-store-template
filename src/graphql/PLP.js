import graphql from 'babel-plugin-relay/macro';

const fragment = graphql`
  fragment PLP_viewer on viewer
    @argumentDefinitions(
      first: { type: "Int", defaultValue: 20 }
      query: { type: "String" }
      sort: { type: "[Sort]" }
      after: { type: "Cursor" }
      filters: { type: "[Filter]" }
      attributes: { type: "[Filter]" }
      defaultFilter: { type: "Filter" }
    ) {
    productList(
      first: $first
      query: $query
      sort: $sort
      after: $after
      filters: $filters
      attributes: $attributes
      defaultFilter: $defaultFilter
    )
      @connection(
        key: "PLP_productList"
        filters: ["query", "filters", "defaultFilter", "attributes"]
      ) {
      edges {
        node {
          id
          ...Item_item
        }
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
`;

export const refetchQuery = graphql`
  query PLP_refetch_Query(
    $ssid: ID
    $first: Int
    $sort: [Sort]
    $after: Cursor
    $query: String
    $filters: [Filter]
    $attributes: [Filter]
    $defaultFilter: Filter
  ) {
    viewer(id: $ssid) {
      ...PLP_viewer
        @arguments(
          first: $first
          query: $query
          sort: $sort
          after: $after
          filters: $filters
          attributes: $attributes
          defaultFilter: $defaultFilter
        )
    }
  }
`;

export default fragment;
