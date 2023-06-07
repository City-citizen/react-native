import { StatusBar } from "expo-status-bar";
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View, Image, TouchableWithoutFeedback, Keyboard,ScrollView,ImageBackground ,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Adimg from '../compent/Adimg';
import BottomTabNav from '../compent/BottomTabNav';
import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import BoardList from "./BoardList";

import { doc , setDoc , collection, serverTimestamp , updateDoc , increment} from "firebase/firestore";
import { auth , db } from "../firebase/firebase";


export default function Addpost() {
    const navigation = useNavigation();
    
      // const { title, contents } = inputs;

const [title, setTitle] = useState("")
const [content, setContent] = useState("")

const [inputs, setInputs] = useState({
  title: '',
  content:'',
});


/*
useEffect(()=>{
  axios.get('http://localhost:19006/board/1').then((response)=>{
    console.log(response.data);
  })
})

const submit = ()=>{
  axios.post('http://localhost:19006', {
    title: inputs.title,
    content: inputs.content
  }).then(()=>{
    alert('등록 완료!');
  })
};
*/
const getValue = (e) => {
  const { name, value } = e.target;
  setInputs({
    ...inputs,
    [name] : value
  })
};


const addpostUnivercityPost = async ()=>{
  const user = auth.currentUser
  const postRef = doc(collection(db, "UnivercityPost"));
  await setDoc(postRef, {
    title : title ,
    content : content ,
    userUid : user.uid,
    good : 0,
    bad : 0,
    comment : 0,
    createdAt : serverTimestamp(),
    postRef : postRef.id,
    report : 0,

  });
  const userDataPoint = doc(collection(db, "users"), user.uid);
  await updateDoc(userDataPoint, { point: increment(100)});
console.log("파이어베이스에 UnivercityPost를 추가하였습니다");

}



return (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
  
      
    <ImageBackground 
            	style={{ width: "100%", height: "100%" }}  //View를 꽉채우도록
                source={require("../img/backgroundimg.png")}  //이미지경로
                resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                >
      
      
      <View style={styles.container2}>
        <TextInput 
        style={styles.title}
        name="title" 
        value={title}
        placeholder='제목'
        onChange={getValue}
        placeholderTextColor={'gray'}
        // onChange={(text) => {
        //   setTitle(text);
        // }}
        onChangeText={(text) => setTitle(text) }
        />
        </View>


<View style={styles.container2}>
        <View style={{marginTop:5,marginBottom:10}}>
        <Text>※혐오발언은 제제대상이 될 수 있는 점 유의하여 주세요※</Text>
        </View>

        
        <TextInput
        style={styles.content} 
        name="contents" 
        value={content}
        placeholder=' 내용'
        placeholderTextColor={'gray'}
        onChange={getValue}
        multiline={true}

        // onChange={(text) => {
        //   setContent(text);
        // }}
        onChangeText={(text) => setContent(text) }
        />
        </View>

        <View style={{ justifyContent:"center", width: "100%", flexDirection: "row", alignItems: "flex-start"}}>
            <TouchableOpacity style={styles.button}
            onPress={() => {
              // onSubmit();
              //console.log({title} , {content});
              navigation.navigate("Board", {title:{title}, content:{content} });
              addpostUnivercityPost();
              //submit();
            }} >
                <Text style={styles.txt}>작성</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.button}>
                <Text style={styles.txt}>
                    취소
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.etc}>
        </View>
        </ImageBackground>
       
        <BottomTabNav />
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    
    
    },
    title: {
      height: 40,
      width: 360,
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginVertical: 15,
      color: "black",
      marginTop: 35,
      backgroundColor: "white",
    },
    content: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        fontSize: 15,
        width: 360,
        height: 450,
        backgroundColor:"white",
        
        
    },
    button: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        width: 70,
        height: 26,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 2,
        paddingTop: 5,
        paddingBottom: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white",

    },
    txt: {
        fontSize: 15,
 
    },

    container2: {
      alignItems:"center"
  },


    input: {
      height: 40,
      width: 300,
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginVertical: 15,
      color: "white",
      marginTop: 35,
      backgroundColor: "white",
      
  },


    etc: {
      width: 250,
      height: 100,

      },
});