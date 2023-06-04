import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { Alert } from "react-native-web";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { setDoc, doc ,addDoc, collection, getFirestore} from 'firebase/firestore'
import { auth , db } from '../firebase/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function JoinMembershipPage() {

  const navigation = useNavigation();

  const [form, setForm] = useState({
    email : "",
    password : "",
    checkPassword: "",
    name : "",
    birth : "",
    school: "",
    major : "",
    classyear : "",
    phonenumber : "",
  
  })
  
  const resultMessages = {
    "auth/email-already-in-use" : "이미 가입된 이메일입니다",
    "auth/wrong-password" : "잘못된 비밀번호입니다",
    "auth/user-not-found" : "존재하지 않는 계정입니다",
    "auth/invalid-email" : "유효하지 않은 이메일 주소입니다"
  }

  const signUpSubmit = async () =>{
  
    try{
  
      if(form.password == form.checkPassword){
        const { user } = await createUserWithEmailAndPassword(auth , form.email, form.password);
        

        const docRef = await setDoc(doc(collection(db, "users"), user.uid), {
          userUid : user.uid,
          email: form.email,
          password: form.password,
          checkPassword: form.checkPassword,
          name: form.name,
          birth: form.birth,
          school: form.school,
          major: form.major,
          classyear: form.classyear,
          phonenumber: form.phonenumber,
          EmpathyRate : '',
          postDeleteRate : '',
          CommentsDeleteRate :'',
          photoUrl : '',
        

        });

        console.log(form);
        Alert.alert("회원가입에 성공")
        console.log(auth);
        navigation.navigate("LoginPage");
        
  
      
      
      }
      else{
        //에러 메시지 보이게끔 작성
        Alert.alert("비밀번호가 일치하지않습니다.")
      }
      
      //signUp 함수가 호출이 되지않음
      //const result = signUp(auth , form.email, form.password);
      
    } catch (error) {
      //에러 메시지 보이게끔 작성
      const alertMessage = resultMessages[error.code] ?
        resultMessages[error.code] : "알 수 없는 이유로 회원가입에 실패했습니다.";
      console.log(error);
      Alert.alert("회원가입에 실패",alertMessage);
    }
  }






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
        value={form.email}
        onChangeText={(text)=> setForm({...form, email : text})}
        
        placeholder="Email"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        value={form.password}
        onChangeText={(text)=> setForm({...form, password : text})}

        placeholder="PASSWORD"      
        placeholderTextColor="black"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        value={form.checkPassword}
        onChangeText={(text)=> setForm({...form, checkPassword : text})}
        placeholder="PASSWORD CHECK"
        placeholderTextColor="black"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        value={form.name}
        onChangeText={(text)=> setForm({...form, name : text})}
        placeholder="이름"
        
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        value={form.birth}
        onChangeText={(text)=> setForm({...form, birth : text})}
        placeholder="생년원일"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        value={form.school}
        onChangeText={(text)=> setForm({...form, school : text})}
        placeholder="학교"
        placeholderTextColor="black"
      />
      <View style={styles.school_major}>
      <TextInput
        style={styles.input2}
        value={form.major}
        onChangeText={(text)=> setForm({...form, major : text})}
        placeholder="학과"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input2}
        value={form.classyear}
        onChangeText={(text)=> setForm({...form, classyear : text})}
        placeholder="입학년도"
        placeholderTextColor="black"
      />
      </View>
      <TextInput
        style={[styles.input, { zIndex: 1 }]}
        value={form.phonenumber}
        onChangeText={(text)=> setForm({...form, phonenumber : text})}
        placeholder="전화번호"
        placeholderTextColor="black"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          signUpSubmit();
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
    paddingTop: 30,
    zIndex: 2,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
    color: "black",
    backgroundColor: "white",
  },
  input2: {
    height: 40,
    width: 130,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal:20,
    color: "black",
    backgroundColor: "white",
  },
  button: {
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    width: 100,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
school_major: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
