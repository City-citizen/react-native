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

export default function JoinMembershipPage() {
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
      <TextInput
        style={styles.input}
        placeholder="ID"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        placeholderTextColor="black"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD CHECK"
        placeholderTextColor="black"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="이름"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="생년원일"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="학교"
        placeholderTextColor="black"
      />
      <TextInput
        style={[styles.input, { zIndex: 1 }]}
        placeholder="전화번호"
        placeholderTextColor="black"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("LoginPage");
        }}
      >
        {/* 파이어베이스 연동시에 로그인은 이메일만 가능하다고 알고 있음 추후 팀회의로 해결법 모색 */}
        <Text style={{ color: "black" }}>회원가입</Text>
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
    width: "75%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 17,
    color: "black",
    backgroundColor: "white",
  },
  button: {
    marginTop: 30,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    width: "20%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
});
