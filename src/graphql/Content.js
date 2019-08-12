import graphql from 'babel-plugin-relay/macro';

const fragment = graphql`
  fragment Content_viewer on viewer @argumentDefinitions(templateuri: { type: "String" }) {
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
`;

export const refetchQuery = graphql`
  query Content_Refetch_Query($templateuri: String, $ssid: ID) {
    viewer(id: $ssid) {
      ...Content_viewer @arguments(templateuri: $templateuri)
    }
  }
`;

export default fragment;
