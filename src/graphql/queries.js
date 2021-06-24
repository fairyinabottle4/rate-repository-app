import { gql } from '@apollo/client';
import { REPOSITORY_INFO } from "./fragments";

export const ALL_REPOS = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          ownerAvatarUrl
          stargazersCount
          forksCount
          reviewCount
          ratingAverage          
        }
      }
    }
  }
`;

export const CHECK_AUTHORIZED = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      ...RepositoryInfo
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }

    }
  }${REPOSITORY_INFO}
`;
