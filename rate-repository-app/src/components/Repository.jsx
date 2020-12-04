import React from "react";
import { View } from "react-native";
import { useParams } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";

const Repository = () => {
  const id = useParams().id;

  const { repository, loading } = useRepository(id);

  if (loading || !repository) return null;

  return (
    <View>
      <RepositoryItem item={repository} single={true} />
    </View>
  );
};

export default Repository;
