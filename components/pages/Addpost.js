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
import Adimg from '../compent/Adimg';
import BottomTabNav from '../compent/BottomTabNav';
import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import BoardList from "./BoardList";

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
        style={styles.title}
        name="title" 
        value={title}
        placeholder='제목'
        //onChange={getValue}
        // onChange={(text) => {
        //   setTitle(text);
        // }}
        onChangeText={(text) => setTitle(text) }
        />
        <TextInput
        style={styles.content} 
        name="contents" 
        value={content}
        placeholder='내용'
        onChange={getValue}
        // onChange={(text) => {
        //   setContent(text);
        // }}
        onChangeText={(text) => setContent(text) }
        />
        <View style={{display:"flex", justifyContent:"center", width: "100%", flexDirection: "row", alignItems: "flex-start"}}>
            <TouchableOpacity style={styles.button}
            onPress={() => {
              // onSubmit();
              //console.log({title} , {content});
              navigation.navigate("Board", {title:{title}, content:{content} });
              submit();
            }} >
                <Text style={styles.txt}>작성</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.button}
            onPress={() => {
              navigation.navigate("Board")
            }}>
                <Text style={styles.txt}>
                    취소
                </Text>
            </TouchableOpacity>
        </View>
        <BottomTabNav />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 50,
        zIndex: 2,
    },
    title: {
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 18,
        width: "90%",
        marginTop: 2,
        marginBottom: 2,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 5,
        paddingRight:5,
        paddingBottom: 10,
        paddingTop:5,
    },
    content: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        fontSize: 15,
        width: "90%",
        height: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        
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
        backgroundColor: "white"
    },
    txt: {
        fontSize: 15,

    }
});