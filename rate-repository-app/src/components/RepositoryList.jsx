import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import SortPrinciple from "./SortPrinciple";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  sortPrinciple,
  setSortPrinciple,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const sortPrincipleProps = {
    sortPrinciple: sortPrinciple,
    setSortPrinciple: setSortPrinciple,
  };

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={repositoryNodes}
      ListHeaderComponent={<SortPrinciple {...sortPrincipleProps} />}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem single={false} item={item} />}
    />
  );
};

const RepositoryList = () => {
  const [sortPrinciple, setSortPrinciple] = useState("latest");
  const { repositories } = useRepositories(sortPrinciple);

  return (
    <RepositoryListContainer
      sortPrinciple={sortPrinciple}
      setSortPrinciple={setSortPrinciple}
      repositories={repositories}
    />
  );
};

export default RepositoryList;
