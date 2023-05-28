import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BottomTab = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomTab}>
      <View style={styles.navButton}>
        <TouchableOpacity onPress={()=>{navigation.navigate('MainPage');}}>
          <MaterialIcons name="home" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.navButton}>
        <TouchableOpacity onPress={() => {navigation.navigate('BoardList');}}>
          <MaterialIcons name="list" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.navButton}>
        <TouchableOpacity style={{ marginTop: 2 }}>
          <MaterialCommunityIcons size={35} name="table-edit" color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.navButton}>
        <TouchableOpacity>
          <MaterialCommunityIcons size={35} name="pig-variant" color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.navButton}>
        <TouchableOpacity onPress={()=>{navigation.navigate('MyPage');}}>
          <MaterialCommunityIcons size={35} name="account" color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  bottomTab: {
    borderColor: "white",
    borderWidth: 1,
    width: "100%",
    height: 75,
    flexDirection: "row",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "space-evenly",
  },
  navButton: {
    margin: 15,
  },
};

export default BottomTab;
