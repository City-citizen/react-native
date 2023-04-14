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
import SearchInput from '../compent/SearchInput';
import Adimg from '../compent/Adimg';
import Header from '../compent/Header';

export default function BoardList() {
    const navigation = useNavigation();


    const boards = [
      {id: 0, name: "University", link: "/board"},
      {id: 1, name: "Major city", link: "univ" },
      {id: 2, name: "맛집", link: "univ"},
      {id: 3, name: "고민", link: "univ"},
      {id: 4, name: "연애", link: "univ"},
      {id: 5, name: "노래추천", link: "univ"},
      {id: 6, name: "구인", link: "univ"}
  ];
  return (
    <View style={styles.container}>
      <Header />
        <SearchInput style={{width: "150%"}} />
        <Adimg />
        {boards.map((board) => (
        <TouchableOpacity
        style={styles.box}
        key={board.id} 
        onPress={() => {
          navigation.navigate("Board");}}
          >
          <Text style={{ fontSize:17 }}>{board.name}</Text>
          {/* <MaterialIcons name="menu" size={35} color="black" />         */}
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 50,
        zIndex: 2,
    },
    box: {
      borderColor:"black",
      borderRadius: 10,
      borderWidth: 2,
      width: "80%",
      height: 20,
      height: 35,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: "auto",
      marginRight: "auto",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
    }
});