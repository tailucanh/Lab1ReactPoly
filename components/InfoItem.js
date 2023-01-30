import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
  Image,
} from "react-native";

function InfoItem(props) {
  return (
    <View style={styles.infoItem}>
      <TouchableHighlight style={[styles.profileImgContainer]}>
        <Image
          source={require("../assets/images/avatar.jpg")}
          style={styles.profileImg}
        />
      </TouchableHighlight>
      <Pressable
        android_ripple={{ color: "#ffffffcc" }}
        styles={styles.pressItem}
      >
        <Text style={styles.styleText}>Họ tên: {props.name}</Text>
        <Text style={styles.styleText}>Mô tả: {props.desc}</Text>
      </Pressable>
    </View>
  );
}

export default InfoItem;

const styles = StyleSheet.create({
  infoItem: {
    margin: 8,
    borderRadius: 2,
    backgroundColor: "#d7e9facc",
    elevation: 2,
    flexDirection: "row",
  },
  pressItem: {
    opacity: 0.5,
  },

  styleText: {
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
});
