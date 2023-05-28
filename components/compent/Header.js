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


export default function Header() {

  return (
    <View>
      <Text style={styles.logo}>Univer city</Text>
        {/* <MaterialIcons name="pencil" size={25} color="black" /> */}
    </View>

  )
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 25,
        fontWeight: 700,
        padding: 15,
        marginRight: "auto",
    },

});