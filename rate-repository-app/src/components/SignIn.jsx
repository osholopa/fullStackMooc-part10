import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Formik } from "formik";

import theme from "../theme";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  formController: {
    padding: 15,
    margin: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
  },
  submitBtn: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    textAlign: "center",
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.formController}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        style={styles.formController}
        secureTextEntry
        name="password"
        placeholder="Password"
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text
          fontWeight="bold"
          style={[styles.formController, styles.submitBtn]}
        >
          Sign in
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
