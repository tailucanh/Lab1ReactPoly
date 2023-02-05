import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
  Image,
} from "react-native";

const InfoItem = ({ item, index, onEdit, onDelete }) => (
  <View style={styles.infoItem}>
    <TouchableHighlight style={[styles.profileImgContainer]}>
      <Image
        source={
          item.link == ""
            ? require("../assets/images/avatar.jpg")
            : { uri: item.link }
        }
        style={styles.profileImg}
      />
    </TouchableHighlight>
    <View style={styles.boxInfo}>
      <Pressable android_ripple={{ color: "#ffffffcc" }}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.styleText}>
          Họ tên: {item.name}
        </Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.styleText}>
          Mô tả: {item.desc}
        </Text>
      </Pressable>

      <Pressable
        android_ripple={{ color: "#ff8690cc" }}
        style={styles.buttonDelete}
        onPress={() => onDelete(index)}
      >
        <Text style={styles.textButton}>Xóa</Text>
      </Pressable>
      <Pressable
        android_ripple={{ color: "#fcff61cc" }}
        style={styles.buttonUpdate}
        onPress={() => onEdit(index)}
      >
        <Text style={styles.textButton}>Sửa</Text>
      </Pressable>
    </View>
  </View>
);

export default InfoItem;

const styles = StyleSheet.create({
  infoItem: {
    flex: 1,
    borderRadius: 3,
    paddingHorizontal: 5,
    marginBottom: 8,
    backgroundColor: "#d7e9facc",
    elevation: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  boxInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  styleText: {
    width: 120,
    paddingTop: 18,
    paddingLeft: 5,
    color: "black",
  },

  profileImgContainer: {
    margin: 8,
    height: 80,
    width: 80,
    borderRadius: 150 / 2,
    elevation: 2,
  },
  profileImg: {
    height: 80,
    width: 80,
    overflow: "hidden",
    borderRadius: 40,
  },
  buttonDelete: {
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 25,
    marginRight: 8,
    elevation: 2,
    backgroundColor: "#ff8690cc",
  },
  buttonUpdate: {
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 25,
    elevation: 2,
    marginRight: 8,
    backgroundColor: "#fff786cc",
  },
  textButton: {
    textAlign: "center",
    color: "black",
    marginTop: 8,
  },
});
