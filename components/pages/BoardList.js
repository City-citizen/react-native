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

export default function BoardList({}) {
    const navigation = useNavigation();


    const boards = [
      {id: 0, name: "University", link: "Board"},
      {id: 1, name: "Major city", link: "univ" },
      {id: 2, name: "맛집", link: "univ"},
      {id: 3, name: "고민", link: "univ"},
      {id: 4, name: "연애", link: "univ"},
      {id: 5, name: "노래추천", link: "univ"},
      {id: 6, name: "신고", link: "ReportList"}
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
          navigation.navigate(board.link);}}
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