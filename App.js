import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
  Image,
  TextInput,
  Modal,
} from "react-native";
import InfoInput from "./components/InfoInput";
import InfoItem from "./components/InfoItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isInfo, setInfo] = useState([]);
  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [linkValue, setLinkValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  function startAddInfo() {
    setModalIsVisible(true);
    return handleClose();
  }

  function endAddInfo() {
    setModalIsVisible(false);
  }

  function handleClose() {
    setNameValue("");
    setDescValue("");
    setLinkValue("");
  }

  const onSave = () => {
    if (editIndex >= 0) {
      // edit existing item
      const newItems = [...isInfo];
      newItems[editIndex] = {
        name: nameValue,
        desc: descValue,
        link: linkValue,
      };
      setInfo(newItems);
      setEditIndex(-1);
    } else {
      // edit existing item
      setInfo([
        ...isInfo,
        {
          name: nameValue,
          desc: descValue,
          link: linkValue,
        },
      ]);
    }
    endAddInfo();
    return handleClose();
  };
  const onEdit = (index) => {
    startAddInfo();
    setEditIndex(index);
    setNameValue(isInfo[index].name);
    setDescValue(isInfo[index].desc);
    setLinkValue(isInfo[index].link);
  };

  const onDelete = (index) => {
    setInfo(isInfo.filter((item, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight style={[styles.profileImgContainer]}>
        <Image
          source={require("./assets/images/avatar.jpg")}
          style={styles.profileImg}
        />
      </TouchableHighlight>

      <Text style={styles.textInfo}>Họ và tên: Lục Anh Tài</Text>
      <Text style={styles.textInfo}>MSSV: PH26495</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={startAddInfo}>
        <Text style={styles.buttonText}>Thêm thông tin</Text>
      </TouchableOpacity>

      {modalIsVisible ? (
        <Modal visible={modalIsVisible} animationType="slide">
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>Nhập thông tin</Text>
            <InfoInput
              placeholder="Nhập tên"
              value={nameValue}
              onChangeText={(text) => setNameValue(text)}
            />

            <InfoInput
              placeholder="Nhập mô tả"
              value={descValue}
              onChangeText={(text) => setDescValue(text)}
            />

            <InfoInput
              placeholder="Link ảnh"
              value={linkValue}
              onChangeText={(text) => setLinkValue(text)}
            />

            <View style={styles.bottomContainer}>
              <TouchableOpacity style={styles.buttonStyleAdd} onPress={onSave}>
                <Text style={styles.buttonText}>
                  {editIndex >= 0 ? "Sửa" : "Thêm"}{" "}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonStyleAdd}
                onPress={endAddInfo}
              >
                <Text style={styles.buttonText}>Hủy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : null}

      <View style={styles.listInfoContainer}>
        <FlatList
          data={isInfo}
          renderItem={({ item, index }) => {
            return (
              <InfoItem
                item={item}
                index={index}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 80,
    width: 80,
    marginBottom: 10,
    borderRadius: 150 / 2,
    elevation: 5,
  },
  profileImg: {
    height: 80,
    width: 80,
    overflow: "hidden",
    borderRadius: 15,
  },
  textInfo: {
    color: "black",
    fontSize: 22,
    fontStyle: "italic",
    textAlign: "center",
  },
  buttonStyle: {
    width: "100%",
    marginTop: 15,
    elevation: 5,
    backgroundColor: "#1bb3a3",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#fff",
    alignSelf: "center",
  },
  listInfoContainer: {
    flex: 5,
    marginTop: 10,
    width: "100%",
  },
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
  bottomContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonStyleAdd: {
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
