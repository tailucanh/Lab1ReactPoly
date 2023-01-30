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
import { useEffect, useState } from "react";

function InfoInput(props) {
  const [enterText, setInfo] = useState({
    name: "",
    desc: "",
    link: "",
  });

  function addInfo() {
    props.onAddInfo(enterText);
    setInfo("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={styles.textTitle}>Nhập thông tin</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập tên"
          name="name"
          value={enterText.name}
          onChange={(e) => setInfo({ ...enterText, name: e.target.value })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Nhập mô tả"
          value={enterText.desc}
          onChange={(e) => setInfo({ ...enterText, desc: e.target.value })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Link ảnh"
          value={enterText.link}
          onChange={(e) => setInfo({ ...enterText, link: e.target.value })}
        />
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={addInfo}>
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
