import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { useParams } from "react-router-native";
import { format } from "date-fns";

import theme from "../theme";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: theme.colors.white,
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  rating: {
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    fontWeight: "bold",
    borderRadius: 25,
    paddingTop: 15,
    padding: 10,
    height: 50,
    width: 50,
    textAlign: "center",
    margin: 10,
  },
  details: {
    flexDirection: "column",
  },
  reviewer: {
    fontWeight: "bold",
  },
  date: {
    color: theme.colors.textSecondary,
  },
  text: {
    marginTop: 10,
    width: 0.8 * Dimensions.get("window").width,
    flexWrap: "wrap",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ListHeader = ({ repository }) => {
  return (
    <View>
      <RepositoryItem item={repository} single />
      <ItemSeparator />
    </View>
  );
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rating}>{review.rating}</Text>
      <View style={styles.details}>
        <Text style={styles.reviewer}>{review.user.username}</Text>
        <Text style={styles.date}>
          {format(new Date(review.createdAt), "dd.MM.yyyy")}
        </Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};

const Repository = () => {
  const id = useParams().id;

  const { repository, loading } = useRepository(id);

  if (loading || !repository) return null;

  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <ListHeader repository={repository} />}
    />
  );
};

export default Repository;
