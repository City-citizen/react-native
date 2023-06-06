import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Adimg from '../compent/Adimg';
import BottomTabNav from '../compent/BottomTabNav';
import { useState, useEffect } from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import axios from 'axios';

import { auth , db } from "../firebase/firebase";
import { collection, query, getDocs, orderBy } from "firebase/firestore";

export default function Board() {
    const navigation = useNavigation();
  
    const [postList, setPostList] = useState([]);
  
    useEffect(() => {
        const getpostData = async () => {
            const postData = collection(db, "UnivercityPost");
            const q = query(postData, orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const posts = querySnapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content,
                    good: doc.data().good,
                    bad: doc.data().bad,
                    comment: doc.data().comment,
                };
            });
            setPostList(posts);
        }
        getpostData();
    }, []);
  
    return (
      <ScrollView style={styles.scrollView}>
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

            <View style={styles.container2}>
            <TextInput
                style={styles.input}
                placeholder="검색"
                placeholderTextColor="black"
            />
             </View>
            <Adimg />
            <View style={styles.addview}>
            <MaterialCommunityIcons
                size={20}
                name="pencil"
                onPress={() => {
                    navigation.navigate("Addpost");
                }}
            />
           

            <TouchableOpacity onPress={() => navigation.navigate("Addpost")}>
                <Text>추가</Text>
            </TouchableOpacity>
            </View> 
              

            <View style={styles.container2}>
            {postList.length > 0 ? (
                <View style={{ width: "90%" }}>
                    {postList.map((p) => (
                        <View
                            style={styles.postbox}
                            key={p.id}
                        >
                            <Text
                                style={styles.title}
                                onPress={() => {
                                  navigation.navigate("Post", {postRef: p.id});
                                }}
                            >
                                {p.title}
                            </Text>
                            <Text>{p.content}</Text>
                            <View style={{ position: "relative" }}>
                                <MaterialIcons
                                    name="thumb-up"
                                    size={15}
                                    color="#AEC6CF"
                                    style={{ position: "absolute", right: "16%", bottom: "1%" }}
                                />
                                <Text style={{ position: "absolute", right: "13%", bottom: "1%" ,fontSize: 13,}}>{p.good}</Text>
                                <MaterialIcons
                                    name="thumb-down"
                                    size={15}
                                    color="#FFB6C1"
                                    style={{ position: "absolute", right: "5%", bottom: "1%" }}
                                />
                                <Text style={{ position: "absolute", right: "2%", bottom: "1%",fontSize: 13, }}>{p.bad}</Text>
                            </View>
                        </View>
                    ))}
                    
                </View>
            ) : (
                <Text>아직 글이 없음</Text>
            )}</View>
            <View style={styles.etc}>
        </View>
            
            <BottomTabNav />
        </View>
        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        
        zIndex: 2,
    },
    container2: {
      alignItems: "center"

  },

    addview:{
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      marginRight:'7%',
      paddingTop : 10,
      paddingBottom : 10,

  },
    postbox: {
        width: "100%",
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
        borderWidth: 1,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        marginLeft: 2,
        marginBottom: 7,
    },
    content: {
        marginLeft: 15,
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
    
    etc: {
  
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: 250,
      height: 100,
    
      
      },

});