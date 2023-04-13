import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import BottomTabNav from "../compent/BottomTabNav";
import Adimg from "../compent/Adimg";

export default function LoginPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: -55,
        }}
        source={require("../img/backgroundimg.png")}
        resizeMode="cover"
      />

      <TextInput
        style={styles.input}
        placeholder="검색"
        placeholderTextColor="black"
      />

        <Adimg />

      <View style={styles.univercity}>
        <Text>Univer city</Text>
      </View>

      <View style={styles.majorcity}>
        <Text>Major city</Text>
      </View>

      <View style={styles.mycity}>
        <Text>My city</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "black", marginRight: 60 }}>
            우리 학교 날씨
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("");
          }}
        >
          <Text style={{ color: "black", marginRight: 60 }}>
            우리 학교 학식
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "black", marginRight: 45 }}>
            우리 학교 도서관
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("");
          }}
        >
          <Text style={{ color: "black", marginRight: 80 }}>신고게시판</Text>
        </TouchableOpacity>
      </View>
      <BottomTabNav />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "white",
  },
  input: {
    height: 40,
    width: "90%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
    color: "white",
    marginTop: 35,
  },
  univercity: {
    width: "90%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 5,
    marginVertical: 15,
    color: "white",
    height: 70,
  },
  majorcity: {
    width: "90%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 5,
    marginVertical: 15,
    color: "white",
    height: 70,
  },
  mycity: {
    width: "90%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 5,
    marginVertical: 10,
    color: "white",
    height: 70,
  },

  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    width: "40%",
    height: 100,
    alignItems: "center",
    borderWidth: 1,
  },
});
