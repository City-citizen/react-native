import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation , useRoute } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Adimg from "../compent/Adimg";
import BottomTabNav from '../compent/BottomTabNav';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function Report() {
  const navigation = useNavigation();

  const route = useRoute();
  const { postRef } = route.params;
  const [writer , setWriter] = useState(null);
  const [post , setPost] = useState(null);

  useEffect(()=>{
    const fetchreportData = async () =>{
      try {
  
  
        const reportDocRef = doc(db, "report", postRef);
        const reportDocSnap = await getDoc(reportDocRef);
        
        
  
  
        if(reportDocSnap.exists()){
          const reportData = reportDocSnap.data();
          const writerUid = reportData.userUid;
  
          const userDocRef = doc(db, "users", writerUid);
          const userDocSnap = await getDoc(userDocRef);
  
          
  
          if(userDocSnap.exists()) {
            const writerData = userDocSnap.data();
            setWriter(writerData);
            console.log(writerData);
          }else{
            console.log("글쓴이정보를 찾을수없습니다");
          }
  
          setPost(reportData);
          
        }else {
          console.log("게시물이 존재하지않습니다");
        }
        
      }catch (error){
        console.log("데이터가져오는도중오류발생", error)
      }
    };
    fetchreportData();
  
  }, [postRef]);

  //제재 함수
  const Sanctions = async()=>{
    console.log('sanctions')

  }

  const save = async()=>{
    console.log('save')

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
        <View style={{alignItems: "flex-start"}}>
          <View style={styles.profilebox}>
            <View style={styles.profile}></View>
            <View>
              <Text style={styles.info}>{writer?.major}(ax123)</Text>
            </View>
          </View>

          <View style={styles.postbox}>
            <Text style={styles.title}>{post?.title}</Text>
            <Text style={styles.content}>{post?.content}</Text>
            <MaterialCommunityIcons name="thumb-down" size={20} color="black" style={{position:"absolute", right: "6%", top: "2%"}} />
            <Text style={{position:"absolute", right: "3%", top: "2%"}}>{post?.bad}</Text>
          </View>

          

          <View style={{width: "100%", display:"flex", flexDirection:"row", justifyContent: "center", alignItems:"center"}}>
            <TouchableOpacity style={styles.button} onPress={Sanctions}>
              <Text>제재</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={save}>
              <Text>구제</Text>
            </TouchableOpacity>
          </View>
          <Adimg />
        </View>
        <BottomTabNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //alignItems: "center",
    
  },
  profile: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    width: 34,
    height: 34,
    marginLeft: 15,
    display: "flex",
  },
  info:{
    fontSize: 15,
    marginLeft: 15,
   
  },
  date: {
    fontSize: 12,
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 15,
  },
  content: {
    fontSize: 15,
    marginLeft: 15,
    
  },
  profilebox: {
    marginBottom: 15,
    marginTop: 15,
    alignItems: "flex-start",
    width: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center"
  },
  postbox: {
    position: "relative",
    paddingBottom: 10,
    marginBottom: 10,
    width: "90%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: 60,
    height: 20,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
  input: {
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 17,
    width: "90%",
    height: "5%",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    display: "fixed",
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },

});
