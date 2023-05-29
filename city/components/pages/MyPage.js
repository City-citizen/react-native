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
import { useNavigation } from "@react-navigation/native";
import BottomTabNav from "../compent/BottomTabNav";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Adimg from "../compent/Adimg";


export default function MyPage() {
  const navigation = useNavigation();

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
      <ScrollView style={styles.table}>
       
      <View style={styles.myProfile}>
        
        <View style={{borderColor:"black",borderWidth:1,width:75,height:75,borderRadius:15,marginLeft:20,marginRight:20}}>

        </View>
        
        <Text style={{fontSize:20}}>학과</Text>
      </View>

      <View style={styles.myList}>
        <View style={styles.list}>
          <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>게시물 작성 목록</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>댓글 작성 목록</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list2}>
          <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>보관 목록</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.myList}>
        <View style={styles.list}>
          <Text style={{ fontSize: 18 }}>게시물 삭제율: </Text>
        </View>
        <View style={styles.list}>
          <Text style={{ fontSize: 18 }}>댓글 삭제율: </Text>
        </View>
        <View style={styles.list2}>
          <Text style={{ fontSize: 18 }}>공감율: </Text>
        </View>
      </View>
        

        <TouchableOpacity style={styles.setUp} onPress={() => {navigation.navigate("EditPage")}}>
        <Text style={{ fontSize: 18 ,paddingLeft:15,marginRight:275}}>설정하기</Text>
        <MaterialIcons name="settings" size={25} color="black" />
        </TouchableOpacity>
      

      <StatusBar style="auto" />
      
      
      
      <Adimg/>
      </ScrollView>
      <BottomTabNav/>
      
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
    width: "90%",
    height: 100,
    alignItems: "center",
    marginBottom: 20,
    marginTop:35,
  },
  myList: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    width: "90%",
    height: 180,
    marginBottom: 20,
  },
  list: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingTop: "4.7%",
    paddingBottom: "4.7%",
  },
  list2: {
    paddingLeft: 15,
    paddingTop: "4.7%",
    paddingBottom: "4.7%",
  },
  setUp:{
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    flexDirection: "row",
    width: "90%",
    height: 50,
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row"
   
  },

});
