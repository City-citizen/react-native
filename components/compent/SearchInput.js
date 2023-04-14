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
import Icon from 'react-native-vector-icons/FontAwesome';


export default function SearchInput() {

  return (
    <View>
      <TextInput
      style={styles.input}
      placeholder="검색">
      {/* <Icon name="search" size={20} color="#000" style={{position: "absolute", right:"10"}} /> */}
      {/* <Icon name="search" size={20} color="#000" style={{position: "absolute", width: "3vh", top: "1vh", right: "10%"}} /> */}
      </TextInput>
      {/* <Icon name="search" size={20} color="#000" style={{position: "absolute", width: "3vh", top: "1vh", right: "10%"}} /> */}
    </View>

  )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "white",
    //     alignItems: "center",
    //     paddingTop: 50,
    //     zIndex: 2,
    // },
    input: {
        borderRadius: 10,
        borderWidth: 2,
        fontSize: "2vh",
        width: "100%",
        height: "2.5vh",
        display: "block",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        position: "relative",
        // padding: "0.7vh",
    },

})