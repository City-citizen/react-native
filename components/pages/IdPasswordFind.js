import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function IdPasswordFind() {
  const navigation = useNavigation();

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

      <Text style={{ marginTop: 40, fontSize: 18, marginRight: 240 }}>
        아이디 찾기
      </Text>
      <TextInput
        style={styles.input}
        placeholder="이름"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="전화번호"
        placeholderTextColor="black"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("LoginPage");
        }}
      >
        <Text style={{ color: "black" ,fontSize:12.5 }}>아이디 찾기</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 40, fontSize: 18, marginRight: 220 }}>
        비밀번호 찾기
      </Text>
      <TextInput
        style={styles.input}
        placeholder="이름"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="아이디"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="전화번호"
        placeholderTextColor="black"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("LoginPage");
        }}
      >
        <Text style={{ color: "black" ,fontSize:12.5,justifyContent:"center"}}>비밀번호 찾기</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 50,
    zIndex: 2,
  },
  input: {
    height: 40,
    width: 320,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 13,
    color: "black",
    backgroundColor: "white",
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
    height:40
  },
});
