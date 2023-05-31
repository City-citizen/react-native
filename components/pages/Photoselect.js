import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomTabNav from "../compent/BottomTabNav";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";

export default function Photoselect() {
  const navigation = useNavigation();

  const deleteImage = async () => {
    setImageUrl(null);
  };

  const [imageUrl, setImageUrl] = useState("");
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const uploadImage = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    } // 권한 확인 코드
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      qulity: 1,
      aspect: [1, 1],
    });
    if (result.canceled) {
      return null;
    }
    console.log(result);
    setImageUrl(result.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: -55,
          zIndex: -1,
        }}
        source={require("../img/backgroundimg.png")}
        resizeMode="cover"
      />
      <View style={styles.myProfile}>
        {imageUrl && (
          <Image
            source={{ uri: imageUrl }}
            style={{ width: "100%", height: "100%", borderRadius: 13 }}
          />
        )}
      </View>
      <View style={styles.fixToText}>
        <TouchableOpacity
          onPress={() => {
            uploadImage();
          }}
        >
          <MaterialIcons name="insert-photo" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteImage();
          }}
        >
          <MaterialIcons name="close" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text
          style={{ color: "black", fontSize: 15, justifyContent: "center" }}
        >
          변경하기
        </Text>
      </TouchableOpacity>

      <BottomTabNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  myProfile: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    flexDirection: "row",
    width: 360,
    height: 360,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 90,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 310,
  },
  button: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    width: 100,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    marginBottom: 25,
  },
});
