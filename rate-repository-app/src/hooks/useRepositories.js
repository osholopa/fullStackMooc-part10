import { useQuery } from "@apollo/react-hooks";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (sortPrinciple) => {
  let variables = null;
  
  switch (sortPrinciple) {
    case "highest":
      variables = {
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
      };
      break;
    case "lowest":
      variables = {
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
      };
      break;
    case "latest":
      variables = { orderBy: "CREATED_AT" };
      break;
    default:
      variables = { searchKeyword: sortPrinciple ? sortPrinciple : "" };
      break;
  }

  const { data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: variables,
  });

  return {
    repositories: data ? data.repositories : undefined,
  };
};

export default useRepositories;
