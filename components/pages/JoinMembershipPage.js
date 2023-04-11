import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function JoinMembershipPage() {
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
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD CHECK"
        placeholderTextColor="black"
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
      <TouchableOpacity>
        <Text>abcsdfjsklfjskljsdklfjklsjlkjklfjsklfjsklj</Text>
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
  backimg: {},
  input: {
    height: 40,
    width: "75%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 17,
    color: "black",
    backgroundColor:"white",
  },
});
