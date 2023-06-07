import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView
} from "react-native";
import BottomTabNav from "../compent/BottomTabNav";
import Adimg from "../compent/Adimg";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import React, {useEffect, useState } from "react";
import { auth , db } from "../firebase/firebase";
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";





export default function MainPage() {
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

  const weatherlink = () => {
    Linking.openURL("https://weather.naver.com/today/06290107?cpName=KMA");
  };
  const librarylink = () => {
    Linking.openURL("https://library.kmu.ac.kr/");
  };
  const foodlink = () => {
    Linking.openURL("https://newcms.kmu.ac.kr/dorm/1873/subview.do");
  };

  const [school, setSchool] = useState("");


  useEffect(() => {
    const getUserDataschool = async () => {
      try {

        const user = auth.currentUser;
        const uid = user.uid;

        if (!user) {
          console.log("사용자를 찾을 수 없습니다.");
          return;
        }
  
        const q = query(collection(db, "users"), where("userUid", "==", uid));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            setSchool(userData.school);
          });
        } else {
          console.log("사용자 문서를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.log("데이터를 가져오는 중에 오류가 발생했습니다.", error);
      }
    };
  
    getUserDataschool();
  }, []);


  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: -55,
        }}
        source={require("../img/backgroundimg.png")}
        resizeMode="cover"
      />


      <View style={styles.research}>
        <Text style={{ fontSize: 25, marginRight: 260}}>{school} </Text>
        {/* 추천검색어를 페이지 이동후 띄울것인지, 아니면 클릭시 띄울것인지 */}
        {/*db 값 불러내서 대학교 이름 불러오기 */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SearchPage");
          }}
        >
          <MaterialIcons name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Adimg />

     
        <View style={styles.univercity}>
        <Text style={{fontSize:17,fontWeight:"500"}}>Univer city</Text>
                   <View style={styles.container2}>
  {postList.length > 0 ? (
    <View style={{ width: "90%" }}>
      
        <View style={{ alignItems:"flex-start" ,marginTop:8}}>
       
        <Text style={styles.title}onPress={() => {
                                  navigation.navigate("Post", {postRef: postList[0].id});
                                }}>[ {postList[0].title} ]</Text>


                                
        
        </View>
        <View style={{ position: "relative" }}>
          <MaterialIcons
            name="thumb-up"
            size={15}
            color="#AEC6CF"
            style={{ position: "absolute", right: "16%", bottom: "1%" }}
          />
          <Text style={{ position: "absolute", right: "13%", bottom: "1%", fontSize: 13 }}>
            {postList[0].good}
          </Text>
          <MaterialIcons
            name="thumb-down"
            size={15}
            color="#FFB6C1"
            style={{ position: "absolute", right: "5%", bottom: "1%" }}
          />
          <Text style={{ position: "absolute", right: "2%", bottom: "1%", fontSize: 13 }}>
            {postList[0].bad}
          </Text>
        </View>
      
    </View>
  ) : (
    <Text>아직 글이 없음</Text>
  )}
</View>
</View>

<View style={styles.majorcity}>
<Text style={{fontSize:17,fontWeight:"500"}}>Major city</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 13,
                borderColor: "black",
                //borderWidth: 1,
                width: 320,
                alignContent:"center"
              }}
            >
              <Text> 최근작성된 글이 없습니다 </Text>
            </Text>
            {/* 게시물로 */}
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>



      <View style={styles.mycity}>
      <Text style={{fontSize:17,fontWeight:"500"}}>My city</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 13,
                borderColor: "black",
                //borderWidth: 1,
                width: 320,
                alignContent:"center"
              }}
            >
              <Text> 최근작성된 글이 없습니다 </Text>
            </Text>
            {/* 게시물로 */}
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => weatherlink()}>
          <Image
            style={{
              width: 70,
              height: 70,
              marginRight:10,
            }}
            source={require("../img/weather.png")}
            //날씨 api불러올것인지 말것인지
          />
          <Text style={{ color: "black",textAlign:"center",fontSize:18}}>
            우리 학교 {"\n"}날씨
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => foodlink()}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              marginRight:5,
              marginLeft:5,
            }}
            source={require("../img/food.png")}
          />
          <Text style={{ color: "black",textAlign:"center",fontSize:18}}>
            우리 학교 {"\n"}학식
            {/* 학식은 어떻게?? */}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => librarylink()}>
  
          <Image
            style={{
              width: 60,
              height: 60,
              marginRight:15,
              marginLeft:5
            }}
            source={require("../img/library.png")}
          />
          <Text style={{ color: "black", textAlign:"center",fontSize:18}}>
            우리 학교 {"\n"}도서관
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("ReportList");
          }}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              marginRight:10,
            }}
            source={require("../img/siren.png")}
          />
          <Text style={{ color: "black", textAlign:"center",fontSize:16}}>신고게시판</Text>
        </TouchableOpacity>
      </View>
      <BottomTabNav />
            
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "white",
  },
  research: {
    height: 60,
    width: 360,
    padding: 0,
    marginTop: 20,
    flexDirection: "row",
  },
  univercity: {
    width: 360,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 5,
    marginVertical: 7,
    color: "white",
    height: 70,
    
  },
  majorcity: {
    width: 360,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 5,
    marginVertical: 7,
    color: "white",
    height: 70,
  },
  mycity: {
    width: 360,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 5,
    marginVertical: 7,
    color: "white",
    height: 70,
  },

  buttonContainer: {
    flexDirection: "row",
    margin: 7,
  },
  button: {
    backgroundColor: "white",
    padding: 3,
    borderRadius: 10,
    marginHorizontal: 20,
    width: 160,
    height: 100,
    alignItems: "center",
    borderWidth: 1,
    flexDirection:"row",
  },
  buttonContents:{
    flexDirection:"column",
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
    
    fontSize:13,
},

});
