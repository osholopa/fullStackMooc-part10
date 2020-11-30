import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.backgroundColor,
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  tab: {
    color: theme.colors.contrastText,
    fontSize: 24,
    padding: 15
  },
});

const AppBarTab = ({ text }) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={styles.tab}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

const AppBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <AppBarTab text={title} />
    </View>
  );
};

export default AppBar;
