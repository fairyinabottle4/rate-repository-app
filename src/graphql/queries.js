import { gql } from '@apollo/client';

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
`