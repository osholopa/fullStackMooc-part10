import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

//eslint-disable-next-line
const styles = StyleSheet.create({});

//eslint-disable-next-line
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput secureTextEntry={props.secureTextEntry && true} style={textInputStyle} {...props} />;
};

export default TextInput;
