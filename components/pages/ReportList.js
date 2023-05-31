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
import { useState, useCallback } from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ReportList() {
    const navigation = useNavigation();
    // const post = [
    //     {id:1, title:"개굴개굴", content:"개굴개룰개루개룩ㄹ", good:2, comment: 4},
    //     {id:2, title:"개굴개굴", content:"개굴개룰개루개룩ㄹ", good:4, comment: 7},
    //     {id:3, title:"개굴개굴", content:"개굴개룰개루개룩ㄹ", good:5, comment: 10}
    //   ]

      
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState([]);

  const addPost = useCallback(() => {
    setIsPost(true),
    setPostList((postList) => [
      ...postList, {id: postList.id + 1, title:'개굴개굴개구리', date:"마감 : 2022.03.18", report: 2},
    ]);
  }, [postList]);

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
        placeholder="검색"
        placeholderTextColor="black"
      />
        <Adimg />
        <TouchableOpacity onPress={addPost}>
            <Text>추가</Text>
        </TouchableOpacity>
        {isPost ? (
        <View style={{width: "90%"}}>
        {postList.map((p) => (
          <View style={styles.postbox}
          key={p.id}
          >
          <Text style={styles.title}
          onPress={() => {
            navigation.navigate("Report");}}
            >{p.title}</Text>
          <Text>{p.date}</Text>
          <View style={{ position:"relative"}}>
            <MaterialIcons name="thumb-down" size={20} color="black" style={{position:"absolute", right: "5%", bottom: "0%"}} />
            <Text style={{position:"absolute", right: "2%", bottom: "0%"}}>{p.report}</Text>
          </View>
        </View>
        ))}
      </View>
      ) : (
        <Text>아직 글이 없음</Text>
      )}
      <BottomTabNav />
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
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
    },
    title: {
        fontSize: 18,
        fontWeight: 700,
        marginLeft: 2,
    },
    content: {
        marginLeft: 2,
    },
    input: {
      height: 40,
      width: "90%",
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginVertical: 15,
      color: "white",
      marginTop: 35,
      backgroundColor: "white",
    },
});