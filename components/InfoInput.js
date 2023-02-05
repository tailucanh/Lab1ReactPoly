import { StyleSheet, TextInput } from "react-native";
import { Component, useEffect, useState } from "react";

const InfoInput = ({ value, onChangeText, placeholder }) => (
  <TextInput
    style={styles.textInput}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
  />
);

export default InfoInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccccc",
    borderRadius: 8,
    width: "100%",
    padding: 8,
    marginTop: 15,
  },
});
