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
import React, {useState} from 'react'
import { Alert } from "react-native-web";
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";



export default function LoginPage() {

  const navigation = useNavigation();
  

  const [Form , setForm] = useState ({

    confirmemail : "",
    confirmpassword : "",
  
  })
  
  
  
  
  const signInSubmit = async () =>{
    
    try{
      
      if(Form.confirmemail !=="" && Form.confirmpassword !== ""){
        
        const { user } = await signInWithEmailAndPassword(auth , Form.confirmemail, Form.confirmpassword);
        
        
        
        console.log(Form);
        console.log("로그인에 성공");
        
        console.log(user.uid);
        navigation.navigate("MainPage");
      
      }
      else{
        //에러 메시지 메시지박스형식으로 보이게끔 작성 필요
        Alert.alert("이메일과 패스워드를 입력해주세요");
      }
      
      
      
    } catch (e) {
      //에러 메시지 메시지박스형식으로 보이게끔 작성필요
      console.log(e);
      Alert.alert("로그인에 실패",e);
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
        }}
        source={require("../img/backgroundimg.png")}
        resizeMode="cover"
      />
      <Text style={{ color: "white", fontSize: 70,marginTop:-80 }}>CITY</Text>
      <TextInput
        style={styles.input}
        value={Form.confirmemail}
        onChangeText={(text)=> setForm({...Form, confirmemail : text})}
        placeholder="Email"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        value={Form.confirmpassword}
        onChangeText={(text)=> setForm({...Form, confirmpassword : text})}
        placeholder="PASSWORD"
        placeholderTextColor="white"
        secureTextEntry={true}
      />
      {/* 아이디 비밀번호 인풋값 받기와 파이어베이스 일치시키기 미완성 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            //navigation.navigate("MainPage");
            signInSubmit();
            
          }}
        >
          <Text style={{ color: "white" }}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("JoinMembershipPage");
          }}
        >
          <Text style={{ color: "white" }}>회원가입</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          navigation.navigate("IdPasswordFind");
        }}
      >
        <Text style={{ color: "white" }}>아이디 비밀번호 찾기</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 160,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "darkblue",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 70,
    alignItems: "center",
  },
  button2: {
    backgroundColor: "darkblue",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 160,
    alignItems: "center",
  },
});



