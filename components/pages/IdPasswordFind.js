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
import React , {useState} from 'react'

import {db} from '../firebase/firebase'
import { setDoc, doc , getDocs, collection, getFirestore, where , query} from 'firebase/firestore'

export default function IdPasswordFind() {

  const navigation = useNavigation();

  const [Findemail, setFindemail] = useState({
    checkphonenumber : "",
    checkname : "", 
  }) 
  const [Findpassword, setFindpassword] = useState({
    checkphonenumber : "",
    checkemail : "",
    checkname : "",
  })

  async function findUserEmailByNameOrPhoneNumber(checkname , checkphonenumber) {
    const usersCollectionRef = collection(db, "users");
    const querySnapshot = await getDocs(query(usersCollectionRef, where("name", "==", checkname), where("phonenumber", "==", checkphonenumber)));
    
    if (querySnapshot.empty) {
      return null; // 사용자를 찾지 못한 경우
    }
    
    // 여러 사용자가 검색 결과로 나올 수 있으므로, 첫 번째 사용자를 반환하거나 사용자들을 배열로 반환할 수도 있습니다.
    const userDocSnapshot = querySnapshot.docs[0];
    const userData = userDocSnapshot.data();
    
    return userData.email;
    
    
  }

  async function findUserPasswordByNameAndEmailAndPhoneNumber(checkname, checkemail, checkphonenumber){
    const usersCollectionRef = collection(db, "users");
    const querySnapshot = await getDocs(query(usersCollectionRef, where("name", "==", checkname), where("email", "==", checkemail), where("phonenumber", "==", checkphonenumber)));
  
    if(querySnapshot.empty){
      return null;
    }
    const userDocSnapshot = querySnapshot.docs[0];
    const userData = userDocSnapshot.data();

    return userData.password;

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

      <Text style={{ marginTop: 40, fontSize: 18, marginRight: 240 }}>
        아이디 찾기
      </Text>
      <TextInput
        style={styles.input}
        value={Findemail.checkname}
        onChangeText={(text)=> setFindemail({...Findemail, checkname : text})}
        placeholder="이름"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        value={Findemail.checkphonenumber}
        onChangeText={(text)=> setFindemail({...Findemail, checkphonenumber : text})}
        placeholder="전화번호"
        placeholderTextColor="black"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={async() => {
          //사용자 email이 null 값이 이여도 사용자의 이메일을 찾았다고 출력이됌.
          if(Findemail.checkname !=="" && Findemail.checkphonenumber !== ""){
            
          
            const email = await findUserEmailByNameOrPhoneNumber(Findemail.checkname,Findemail.checkphonenumber);
            if(email != null){
              Alert.alert("사용자의 이메일을 찾았습니다", email);
              //사용자의 이메일 사용자에게 보이게끔 설정해야함
            }
            else{
              Alert.alert("사용자의 이메일을 찾지못했습니다.", Findemail.checkname , Findemail.checkphonenumber);
            }
            //navigation.navigate("LoginPage");
          }
          else{
            Alert.alert("이름과 전화번호를 입력해주세요");
          }
        }}
      
      >
        <Text style={{ color: "black" ,fontSize:12.5 }}>아이디 찾기</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 40, fontSize: 18, marginRight: 220 }}>
        비밀번호 찾기
      </Text>
      <TextInput
        style={styles.input}
        value={Findpassword.checkname}
        onChangeText={(text)=> setFindpassword({...Findpassword, checkname : text})}
        placeholder="이름"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        value={Findpassword.checkemail}
        onChangeText={(text)=> setFindpassword({...Findpassword, checkemail : text})}
        placeholder="Email"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        value={Findpassword.checkphonenumber}
        onChangeText={(text)=> setFindpassword({...Findpassword, checkphonenumber : text})}
        placeholder="전화번호"
        placeholderTextColor="black"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={async() => {
          const password = await findUserPasswordByNameAndEmailAndPhoneNumber(Findpassword.checkname,Findpassword.checkemail,Findpassword.checkphonenumber);
          if(password != null){
            Alert.alert("사용자의 패스워드를 찾았습니다",password);
            //사용자의 패스워드 사용자에게 보이게끔 설정해야함
          }
          else{
            Alert.alert("사용자의 패스워드를 찾지못했습니다.", Findpassword.checkname , Findpassword.checkemail, Findpassword.checkphonenumber);
          }
          //navigation.navigate("LoginPage");
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
