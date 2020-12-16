import { gql } from "apollo-boost";
import { REPOSITORY_DETAILS, SINGLE_REPOSITORY_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      ...SingleRepositoryDetails
    }
  }
  ${SINGLE_REPOSITORY_DETAILS}
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
