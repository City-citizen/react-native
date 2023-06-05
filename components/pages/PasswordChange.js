import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomTabNav from "../compent/BottomTabNav";

import { auth } from "../firebase/firebase";
import { updatePassword } from "firebase/auth";
import { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function PasswordChange() {
  
  const navigation = useNavigation();
  
  const [checkPassword, setcheckPassword] = useState('');
  const [newPassword , setnewPassword] = useState('');
  const user = auth.currentUser;

  

  const updatePasswordAndFirestore = async () =>{
    try{
    
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.data();
      const currentPassword = userData.password;

      if(currentPassword !== checkPassword){
        Alert.alert("현재 비밀번호와 일치하지 않습니다");
        return;
      }


      await updatePassword(user, newPassword);
      Alert.alert("패스워드를 변경하였습니다");

      await updateDoc(userDocRef, {
        password : newPassword,
      });

      console.log("firestore의 사용자 문서의 패스워드를 업테이트하였습니다");
    }catch(error){
      console.log("패스워드를 변경하지 못했습니다",error);
      //auth/requires-recent-login 파이어베이스 보안 규칙때문에 사용자가 최근에 로그인을 해야 패스워드를 변경할 수 있음 이 오류가 발생하면 다시 로그인하라는 메시지와 강제로그아웃후 loginpage로 이동 
    }
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

      <Text style={{ marginTop: 70, fontSize: 18, marginRight: 220 }}>
        비밀번호 변경
      </Text>
      <TextInput
        style={styles.input}
        placeholder="이름"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="ID"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        value ={checkPassword}
        onChangeText={(text)=>setcheckPassword(text)}
        
        placeholder="password"
        placeholderTextColor="black"
      />

      <TextInput
        style={styles.input}
        value ={newPassword}
        onChangeText={(text)=>setnewPassword(text)}
        placeholder="New password"
        placeholderTextColor="black"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={updatePasswordAndFirestore}

      >
        <Text
          style={{ color: "black", fontSize: 12.5, justifyContent: "center" }}
        >
          비밀번호 변경
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      <BottomTabNav />
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
    height: 40,
  },
});
