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

export default function LoginPage() {
  const navigation = useNavigation();

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

      <ScrollView style={styles.table}>

      <TouchableOpacity style={styles.research} onPress={() => {navigation.navigate("SearchPage")}}>
        <Text style={{ fontSize: 16, marginRight: 320 }}>검색</Text>
        {/* 추천검색어를 페이지 이동후 띄울것인지, 아니면 클릭시 띄울것인지 */}
        <MaterialIcons name="search" size={20} color="black" />
      </TouchableOpacity>

      <Adimg />

      <View style={styles.univercity}>
        <Text>Univer city</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                borderColor: "black",
                borderWidth: 1,
                width: 350,
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
                borderWidth: 1,
                width: 350,
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
                borderWidth: 1,
                width: 350,
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
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "black", marginRight: 60 }}>
            우리 학교 날씨
          </Text>
          <Image
            style={{
              width: 70,
              height: 70,
              marginRight: 80,
            }}
            source={require("../img/weather.png")}
            //날씨 api불러올것인지 말것인지
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("");
          }}
        >
          <Text style={{ color: "black", marginRight: 60 }}>
            우리 학교 학식
          </Text>
          <Image
            style={{
              width: 70,
              height: 70,
              marginRight: 80,
            }}
            source={require("../img/food.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "black", margintop: 45 }}>
            우리 학교 도서관
          </Text>
          <Image
            style={{
              width: 60,
              height: 60,
              marginRight: 80,
            }}
            source={require("../img/library.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("");
          }}
        >
          <Text style={{ color: "black", marginRight: 80 }}>신고게시판</Text>
          <Image
            style={{
              width: 70,
              height: 70,
              marginRight: 80,
            }}
            source={require("../img/siren.png")}
          />
        </TouchableOpacity>
      </View>
      </ScrollView>
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
    height: 40,
    width: "90%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
    marginTop: 35,
    flexDirection: "row",
  },
  univercity: {
    width: "90%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 5,
    marginVertical: 15,
    color: "white",
    height: 70,
  },
  majorcity: {
    width: "90%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 5,
    marginVertical: 15,
    color: "white",
    height: 70,
  },
  mycity: {
    width: "90%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 5,
    marginVertical: 10,
    color: "white",
    height: 70,
  },

  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    width: "40%",
    height: 100,
    alignItems: "center",
    borderWidth: 1,
  },
});
