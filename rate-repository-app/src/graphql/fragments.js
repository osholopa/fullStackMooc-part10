import { gql } from "apollo-boost";

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    createdAt
    description
    forksCount
    fullName
    id
    language
    name
    ownerName
    ratingAverage
    reviewCount
    stargazersCount
    ownerAvatarUrl
  }
`;

export const SINGLE_REPOSITORY_DETAILS = gql`
  fragment SingleRepositoryDetails on Repository {
    createdAt
    description
    forksCount
    fullName
    id
    language
    name
    ownerName
    ratingAverage
    reviewCount
    stargazersCount
    ownerAvatarUrl
    url
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
`;