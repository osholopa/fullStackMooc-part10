import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 5,
  },
  avatar: {
    margin: 10,
    width: 45,
    height: 45,
    borderRadius: 2,
  },
  flexRow: {
    flexDirection: "row",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  button: {
    flexGrow: 0,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    padding: 4,
    borderRadius: 4,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  summaryItem: {
    padding: 10,
  },
});

const SummaryItem = ({ item }) => {
  const parseValue = (value) => {
    if (value > 1000) {
      return `${(value / 1000).toFixed(1)} k`;
    }
    return value;
  };

  return (
    <View style={styles.summaryItem}>
      <Text color="textSecondary">{item.label}</Text>
      <Text>{parseValue(item.value)}</Text>
    </View>
  );
};

const RepositoryListItem = ({ item }) => {
  const summary = [
    { label: "Stars", value: item.stargazersCount },
    { label: "Forks", value: item.forksCount },
    { label: "Reviews", value: item.reviewCount },
    { label: "Rating", value: item.ratingAverage },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.spaceBetween}>
          <Text fontSize="subheading" fontWeight="bold">
            {item.fullName}
          </Text>
          <Text color="textSecondary">{item.description}</Text>
          <View style={styles.flexRow}>
            <TouchableWithoutFeedback>
              <Text style={styles.button}>{item.language}</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        style={styles.summary}
        data={summary}
        renderItem={SummaryItem}
      ></FlatList>
    </View>
  );
};

export default RepositoryListItem;
