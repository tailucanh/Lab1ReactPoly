import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Modal,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Component, useEffect, useState } from "react";

function InfoInput(props) {
  const data = [
    {
      id: 1,
      name: "Abc",
      desc: "abc",
      link: "abc",
    },
  ];
  const [enterText, setInfo] = useState(data);
  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [linkValue, setLinkValue] = useState("");

  function handleAdd() {
    const newItem = {
      id: enterText[enterText.length - 1].id + 1,
      name: nameValue,
      desc: descValue,
      link: linkValue,
    };
    // const newInfoList = [...enterText, newItem];
    // setInfo(newInfoList);
    props.onAddInfo(newItem);
    setNameValue("");
    setDescValue("");
    setLinkValue("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={styles.textTitle}>Nhập thông tin</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập tên"
          value={nameValue}
          onChangeText={(text) => setNameValue(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Nhập mô tả"
          value={descValue}
          onChangeText={(text) => setDescValue(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Link ảnh"
          value={linkValue}
          onChangeText={(text) => setLinkValue(text)}
        />

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={handleAdd}>
            <Text style={styles.buttonText}>Thêm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={props.onCancel}>
            <Text style={styles.buttonText}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default InfoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 10,
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#a1a1a1cc",
  },
  textTitle: {
    color: "red",
    fontSize: 25,
    paddingBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccccc",
    borderRadius: 8,
    width: "100%",
    padding: 8,
    marginTop: 15,
  },
  bottomContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonStyle: {
    width: 100,
    marginHorizontal: 8,
    elevation: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#000000",
    alignSelf: "center",
  },
});
