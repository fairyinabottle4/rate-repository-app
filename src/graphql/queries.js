import { gql } from '@apollo/client';

export const ALL_REPOS = gql`
  query {
    repositories {
      edges {
        node {
          name
        }
      }
    }
  }
`;