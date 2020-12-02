import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if(error) {
      console.log(error);
    }
    if(!loading && data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading };
};

export default useRepositories;
