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
import BottomTabNav from "../compent/BottomTabNav";
import { MaterialIcons } from "@expo/vector-icons";
import Adimg from "../compent/Adimg";

export default function SearchPage() {
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

<View style={styles.input}>
<TextInput style={{width:320, borderColor:"black",fontSize:20,height:30,marginTop:3,marginLeft:3}}
        placeholder="검색"
        placeholderTextColor="black"
      />
        <TouchableOpacity>
      <MaterialIcons name="search" size={20} color="black" style={{marginTop:9,marginLeft:3}} />
      </TouchableOpacity>
</View>
<Adimg/>
     

      <View style={styles.myList}>
        <View style={{borderBottomWidth:1,borderBottomColor:"black",paddingBottom:7}}>
        <Text style={{ fontSize: 25, margin: 10 }}>인기 검색어</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7 }}>1.</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7 }}>2.</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7 }}>3.</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7 }}>4.</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7 }}>5.</Text>
        </TouchableOpacity>
      </View> 
        {/* 인기검색어 */}

        <View style={{marginTop:5}}>
        <Text style={{ fontSize: 25, margin: 10 }}>인기 게시물</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7 }}>1.</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7 }}>2.</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7 }}>3.</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7 }}>4.</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 7 }}>5.</Text>
        </TouchableOpacity>
      </View>

      </View>

      <BottomTabNav />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 50,
  },
  myList: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "white",
    width: 360,
    height: 450,
   marginTop:10,
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: 360,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
justifyContent:"center",
    color: "white",
    flexDirection:"row",
    marginBottom:10
  },
});
