import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.backgroundColor,
    height: 80,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  tab: {
    color: theme.colors.white,
    fontSize: 24,
    padding: 15,
  },
});

const AppBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.tab}>{title}</Text>
      </Link>
      <Link to="/signin">
        <Text style={styles.tab}>Sign in</Text>
      </Link>
    </View>
  );
};

export default AppBar;
