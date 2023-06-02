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
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Adimg from "../compent/Adimg";
import BottomTabNav from '../compent/BottomTabNav';
import { useState, useCallback } from "react";

export default function Report() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [boolGood, setBoolGood] = useState(false);
  const [boolBad, setBoolBad] = useState(false);
  const navigation = useNavigation();

  const goodIncrease = () => {
    if(boolGood==false) {
      setBoolGood(!boolGood);
      setGood(prevCount => prevCount + 1);
    }
    else {
      setBoolGood(!boolGood);
      setGood(prevCount => prevCount - 1);
    }
  };

  const badIncrease = () => {
    if(boolBad==false) {
      setBoolBad(!boolBad);
      setBad(prevCount => prevCount + 1);
    }
    else {
      setBoolBad(!boolBad);
      setBad(prevCount => prevCount - 1);
  }
}

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
        <View style={{alignItems: "flex-start", paddingBottom: 20}}>
          <View style={styles.profilebox}>
            <View style={styles.profile}></View>
            <View>
              <Text style={styles.info}>컴퓨터공학과(ax123)</Text>
            </View>
          </View>

          <View style={styles.postbox}>
            <Text style={styles.title}>개굴개굴</Text>
            <Text style={styles.content}>개굴개굴개굴</Text>
            <MaterialCommunityIcons name="thumb-down" size={20} color="black" style={{position:"absolute", right: "6%", top: "2%"}} />
            <Text style={{position:"absolute", right: "3%", top: "2%"}}>2</Text>
          </View>

          <View style={styles.postbox}>
            <Text style={styles.title}>개굴개굴</Text>
            <Text style={styles.content}>개굴개굴개굴</Text>
            <MaterialCommunityIcons name="thumb-down" size={20} color="black" style={{position:"absolute", right: "6%", top: "2%"}} />
            <Text style={{position:"absolute", right: "3%", top: "2%"}}>3</Text>
          </View>

          <MaterialCommunityIcons name="lifebuoy" size={20} color="black" style={{position:"absolute", left: "15%", bottom: "0%"}} />
            <Text style={{position:"absolute", left: "12%", bottom: "0%"}}>{good}</Text>
            <MaterialCommunityIcons name="emoticon-devil" size={20} color="black" style={{position:"absolute", left: "5%" , bottom: "0%"}}/>
            <Text style={{position:"absolute", left: "23%", bottom: "0%"}}>{bad}</Text>
          </View>

          <View style={{width: "100%", display:"flex", flexDirection:"row", justifyContent: "center", alignItems:"center"}}>
            <TouchableOpacity style={styles.button} onPress={goodIncrease}>
              <Text>재제</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={badIncrease}>
              <Text>구제</Text>
            </TouchableOpacity>

          </View>
          <Adimg />
        <BottomTabNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //alignItems: "center",
    
  },
  profile: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    width: 34,
    height: 34,
    marginLeft: 15,
    display: "flex",
  },
  info:{
    fontSize: 15,
    marginLeft: 15,
   
  },
  date: {
    fontSize: 12,
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 15,
  },
  content: {
    fontSize: 15,
    marginLeft: 15,
    
  },
  profilebox: {
    marginBottom: 15,
    marginTop: 15,
    alignItems: "flex-start",
    width: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center"
  },
  postbox: {
    position: "relative",
    paddingBottom: 10,
    marginBottom: 10,
    width: "90%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: 60,
    height: 20,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
  input: {
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 17,
    width: "90%",
    height: "5%",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    display: "fixed",
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },

});
