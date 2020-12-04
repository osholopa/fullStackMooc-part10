import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const [repository, setRepository] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id: id },
  });

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (!loading && data) {
        setRepository(data.repository);
    }
  }, [data]);

  return { repository, loading };
};

export default useRepository;
