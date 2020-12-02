import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import theme from "../theme";

import { useQuery, useApolloClient } from "@apollo/react-hooks";
import { AUTHORIZED_USER } from "../graphql/queries";
import AuthStorageContext from "../contexts/AuthStorageContext";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.backgroundColor,
    height: 100,
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
  const { data } = useQuery(AUTHORIZED_USER);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  const isLoggedIn = data ? data.authorizedUser : false;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.tab}>{title}</Text>
        </Link>
        {isLoggedIn ? (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.tab}>Sign out</Text>
          </TouchableOpacity>
        ) : (
          <Link to="/signin">
            <Text style={styles.tab}>Sign in</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
