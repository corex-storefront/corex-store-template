import graphql from 'babel-plugin-relay/macro';

const fragment = graphql`
  fragment Menu_taxonomy on Taxonomy @relay(plural: true) {
    id
    index
    name
    url
    childrens {
      name
      index
      url
      childrens {
        name
        index
        url
      }
    }
  }
`;

export default fragment;
