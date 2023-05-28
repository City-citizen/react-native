import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomTabNav from "../compent/BottomTabNav";

export default function EditPage() {
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

      <View style={styles.myList}>
        <Text style={{ fontSize: 25, margin: 10 }}>계정</Text>
        <TouchableOpacity onPress={() => {navigation.navigate("PasswordChange")}}>
          <Text style={{ fontSize: 15, margin: 10 }}>비밀번호 변경</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {
          navigation.navigate("Photoselect");
        }}>
          <Text style={{ fontSize: 15, margin: 10 }}>프로필 사진 변경</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.myList2}>
        <Text style={{ fontSize: 25, margin: 10,marginTop:13,marginBottom:7 }}>이용 안내</Text>
        
          <Text style={{ fontSize: 15, margin: 7,marginLeft:10 }}>앱 버전 : 1.0.0 (beta)</Text>
     

        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7,marginLeft:10 }}>문의하기</Text> 
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7,marginLeft:10}}>공지사항</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.myList3}>
        <View>
          <Text style={{ fontSize: 25, margin: 10 }}>기타</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{ fontSize: 15, margin: 10 }}>회원 탈퇴</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => {navigation.navigate("LoginPage")}}>
            <Text style={{ fontSize: 15, margin: 10 }}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* 전체적으로 이 페이지의 내용을 페이지로 구현할지 */}

      <BottomTabNav />
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
  },
  myList: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    width: 360,
    height: 130,
    marginBottom: 20,
    justifyContent: "center",
    marginBottom:20,
  },
  myList2: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    width: 360,
    height: 165,
    marginBottom: 20,
    justifyContent: "center",
    marginBottom:20,
  },
  myList3: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    width: 360,
    height: 130,
    marginBottom: 20,
    justifyContent: "center",
    marginBottom:20,
  },
});
