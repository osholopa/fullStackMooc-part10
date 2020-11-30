import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch } from "react-router-native";

import theme from "../theme";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";

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
      <Switch>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;
