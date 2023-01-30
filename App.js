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
} from "react-native";
import InfoInput from "./components/InfoInput";
import InfoItem from "./components/InfoItem";

export default function App() {
  const [isInfo, setInfo] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddInfo() {
    setModalIsVisible(true);
  }

  function endAddInfo() {
    setModalIsVisible(false);
  }
  function addInfo(...enterText) {
    setInfo((e) => [
      ...e,
      {
        name: enterText,
        desc: enterText,
        link: enterText,
      },
    ]);
    endAddInfo();
  }

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
      <InfoInput
        visible={modalIsVisible}
        onCancel={endAddInfo}
        onAddInfo={addInfo}
      />
      <View style={styles.listInfoContainer}>
        <FlatList
          data={isInfo}
          renderItem={(itemData) => {
            return (
              <InfoItem
                name={itemData.name}
                description={itemData.desc}
                link={itemData.link}
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
    elevation: 10,
  },
  profileImg: {
    height: 80,
    width: 80,
    overflow: "hidden",
    borderRadius: 40,
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
});
