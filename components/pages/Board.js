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
import { useState, useCallback } from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function BoardList() {
    const navigation = useNavigation();
    const post = [
        {id:1, title:"개굴개굴", content:"개굴개룰개루개룩ㄹ", good:2, comment: 4},
        {id:2, title:"개굴개굴", content:"개굴개룰개루개룩ㄹ", good:4, comment: 7},
        {id:3, title:"개굴개굴", content:"개굴개룰개루개룩ㄹ", good:5, comment: 10}
      ]

      
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState([]);

  const addPost = useCallback(() => {
    setIsPost(true),
    setPostList((postList) => [
      ...postList, {id:1, title:'개굴개굴개구리', content:"개굴개굴개굴", good: 2, comment: 2},
    ]);
  }, [postList]);

  return (
    <View style={styles.container}>
        <SearchInput />
        <Adimg />
        <MaterialIcons name="settings" size={25} color="black" style={{position:"absolute", right: "16vw", bottom: "1vh"}} 
                onPress={() => {
                    navigation.navigate("Addpost");}}/>
        <TouchableOpacity onPress={addPost}>
            <Text>추가</Text>
        </TouchableOpacity>
        {isPost ? (
        <View style={{width: "90%"}}>
        {postList.map((p) => (
          <View style={styles.postbox}>
          <Text style={styles.title}>{p.title}</Text>
          <Text>{p.content}</Text>
          <View style={{ position:"relative"}}>
            <MaterialIcons name="settings" size={25} color="black" style={{position:"absolute", right: "16vw", bottom: "1vh"}} />
            <Text style={{position:"absolute", right: "13vw", bottom: "1vh"}}>{p.good}</Text>
            <MaterialIcons name="settings" size={25} color="black" style={{position:"absolute", right: "5vw", bottom: "1vh"}}/>
            <Text style={{position:"absolute", right: "2vw", bottom: "1vh"}}>{p.comment}</Text>
          </View>
        </View>
        ))}
      </View>
      ) : (
        <Text>아직 글이 없음</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        // paddingTop: 50,
        zIndex: 2,
    },
    postbox: {
        width: "95%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: "auto",
        paddingLeft: 10,
        paddingRight: "auto",
        marginLeft: "auto",
        marginRight: "auto",
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        marginLeft: 2,
    },
    content: {
        marginLeft: 2,
    }
});