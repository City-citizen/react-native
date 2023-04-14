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
import SearchInput from '../compent/SearchInput';
import Adimg from '../compent/Adimg';
import Header from '../compent/Header';
import { useState, useCallback, useEffect } from "react";


export default function Addpost() {
    const navigation = useNavigation();

    const [inputs, setInputs] = useState({
        title: '',
        contents: '',
    });

    const { title, contents } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
      };

    //   useEffect(() => {
    //     TextInput.current.focus();
    // }, []);

    //   const onKeyUp = (e) => {
    //     if(e.key === 'Enter') {
    //         TextInput.current.focus();
    //     }
    // }

  return (
    <View style={styles.container}>
        <TextInput 
        style={styles.title}
        name="title" 
        value={title}
        placeholder='제목'
        onChange={onChange}
        />
        <TextInput
        style={styles.content} 
        name="contents" 
        value={contents}
        placeholder='내용'
        />
        <View style={{display:"flex", justifyContent:"center"}}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.txt}>작성</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.button}>
                <Text style={styles.txt}>
                    취소
                </Text>
            </TouchableOpacity>
        </View>
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
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        width: "90%",
        marginTop: 2,
        marginBottom: 2,
        marginLeft: "auto",
        marginRight: "auto",

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
        width: 100,
        height: 20,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 2,
        marginRight: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    txt: {
        fontSize: 15
    }
});