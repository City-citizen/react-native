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
import BottomTab from "../compent/BottomTabNav";
import { auth, db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function BoardList({}) {
    const navigation = useNavigation();
    const [usermajor, setUserMajor] = useState("");
    const [majorcomment, setMajorcomment] = useState("");
    const [userschool, setUserschool] = useState("");
    const [schoolcomment, setSchoolcomment] = useState("");

  useEffect(() => {
    const fetchUserMajor = async () => {
      const user = auth.currentUser;
      const uid = user.uid;
      const q = query(collection(db, "users"), where("userUid", "==", uid));
      const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs[0].data();
      const major = userData.major;
      setUserMajor(major);
      const school = userData.school;
      setUserschool(school);
      const majorcommenttext = major + 'comment';
      setMajorcomment(majorcommenttext);
      const schoolcomment = school + 'comment';
      setSchoolcomment(schoolcomment);
      
    };

    fetchUserMajor();
  }, []);
    
    //const usercomment = (usermajor,'comment');

    


    const boards = [
      {id: 0, name: "University", link: "UnivercityPost", linkcomment: "Univercitycomment"},
      {id: 1, name: usermajor, link: usermajor, linkcomment: majorcomment},
      {id: 2, name: userschool, link: userschool, linkcomment: schoolcomment},
      {id: 3, name: "맛집", link: "FoodPost", linkcomment: "FoodPostcomment"},
      {id: 4, name: "고민", link: "ThinkPost", linkcomment: "ThinkPostcomment"},
      {id: 5, name: "연애", link: "LovePost", linkcomment: "LovePostcomment"},
      {id: 6, name: "노래추천", link: "MusicPost", linkcomment: "MusicPostcomment"},
  ];
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
        {boards.map((board) => (
        <TouchableOpacity
        style={styles.box}
        key={board.id}
        
        onPress={() => {
          
          navigation.navigate( 'Board', {link : board.link, linkcomment: board.linkcomment} );
        }}
          >
          <Text style={{ fontSize:17 }}>{board.name}</Text>
        </TouchableOpacity>
      ))}
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
    box: {
      borderColor:"black",
      borderRadius: 10,
      borderWidth: 2,
      width: 360,
      height: 20,
      height: 40,
      marginTop: 11,
      marginBottom: 11,
      marginLeft: "auto",
      marginRight: "auto",
      padding: 7,
      paddingLeft:15,
      justifyContent: "center",
      backgroundColor: "white",
    },
    input: {
      height: 40,
      width: 360,
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginVertical: 15,
      color: "white",
      marginTop: 35,
    },
});