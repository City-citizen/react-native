import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import BottomTabNav from "../compent/BottomTabNav";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Adimg from "../compent/Adimg";
import Mark from "./Mark";
import { auth, db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, {useEffect ,useState} from "react";



export default function MyPage() {

  const navigation = useNavigation();
  
  const user = auth.currentUser;
  const route = useRoute();
  const { writerUid } = route.params;
  
  
  const [major, setMajor] = useState("");
  const [postcount , setPostcount] = useState(null);
  const [commentcount, setCommentcount] = useState(null);
  const [empathycount, setEmpathycount] = useState(null);


  //user.id를 이용해 파이어베이스에 있는 major 값 가져오기
  useEffect(() => {
    
    const getUserData = async () => {
      try {

        
        const uid = writerUid;

        if (!user) {
          console.log("사용자를 찾을 수 없습니다.");
          return;
        }
  
        const q = query(collection(db, "users"), where("userUid", "==", uid));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            setMajor(userData.major);
            setPostcount(userData.postReportedCount);
            setCommentcount(userData.commentReportedCount);
            setEmpathycount(userData.empathyCount);
            
          });
        } else {
          console.log("사용자 문서를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.log("데이터를 가져오는 중에 오류가 발생했습니다.", error);
      }
    };
  
    getUserData();
  }, []);

  

  


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
      <View style={styles.myProfile}>
        <View
          style={{
            borderColor: "black",
            borderWidth: 1,
            width: 75,
            height: 75,
            borderRadius: 15,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <Image
            source={{ uri : user.photoURL}}
            style={{width : "100%", height:"100%",borderRadius : 15}}
            resizeMode="cover"
            />

        </View>
        <Text style={{ fontSize: 20 }}>학과 : {major} </Text>
      </View>

      <View style={styles.myList2}>
        <View style={styles.list}>
          <TouchableOpacity onPress={()=>{navigation.navigate('PostList');}}>
            <Text style={{ fontSize: 18 }}>게시물 작성 목록</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list2}>
          <TouchableOpacity onPress={()=>{navigation.navigate('CommentList');}}>
            <Text style={{ fontSize: 18 }}>댓글 작성 목록</Text>
          </TouchableOpacity>
        </View>
        
      </View>

      <View style={styles.myList2}>
        <View style={styles.list}>
          <Text style={{ fontSize: 18 }}>게시물 신고수: {postcount} </Text>
        </View>
        <View style={styles.list2}>
          <Text style={{ fontSize: 18 }}>댓글 신고수: {commentcount} </Text>
        </View>
      </View>

      
      <StatusBar style="auto" />
      <BottomTabNav />
      <Adimg />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  myProfile: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    flexDirection: "row",
    width: 360,
    height: 100,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 35,
  },
  myList: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    width: 360,
    height: 170,
    marginBottom: 15,
  },
  myList2: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    width: 360,
    height: 113,
    marginBottom: 15,
  },
  list: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingTop: 16,
    paddingBottom: 16,
  },
  list2: {
    paddingLeft: 15,
    paddingTop: 16,
    paddingBottom: 16,
  },
  setUp: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    flexDirection: "row",
    width: 360,
    height: 50,
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
  },
});