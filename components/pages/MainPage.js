import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import BottomTabNav from "../compent/BottomTabNav";
import Adimg from "../compent/Adimg";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

export default function MainPage() {
  const navigation = useNavigation();
  const weatherlink = () => {
    Linking.openURL("https://weather.naver.com/today/06290107?cpName=KMA");
  };
  const librarylink = () => {
    Linking.openURL("https://library.kmu.ac.kr/");
  };
  const foodlink = () => {
    Linking.openURL("https://newcms.kmu.ac.kr/dorm/1873/subview.do");
  };


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
        <Text style={{ fontSize: 25, marginRight: 260}}>계명대</Text>
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
        <Text>Univer city</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                borderColor: "black",
                //borderWidth: 1,
                width: 320,
              }}
            >
              가장 최신의 글
            </Text>
            {/* 게시물로 */}
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.majorcity}>
        <Text>Major city</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                borderColor: "black",
                //borderWidth: 1,
                width: 320,
              }}
            >
              가장 최신의 글
            </Text>
            {/* 게시물로 */}
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mycity}>
        <Text>My city</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                borderColor: "black",
                //borderWidth: 1,
                width: 320,
              }}
            >
              가장 최신의 글
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
            navigation.navigate("");
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
    marginVertical: 7,
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
  }
});
