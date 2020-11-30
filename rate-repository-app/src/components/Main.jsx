import React from "react";
import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import theme from "../theme";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.body.backgroundColor,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar title="Repositories" />
      <RepositoryList />
    </View>
  );
};

export default Main;
