import React from 'react';
import { ScrollView,StyleSheet, View, TextInput, TouchableWithoutFeedback, Text, Image,TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BottomTabNav from "../compent/BottomTabNav";
import Adimg from "../compent/Adimg";
import * as Linking from "expo-linking";

export default function License() {
    const navigation = useNavigation();
    const examlink = () => {
      Linking.openURL("https://www.youtube.com/@bigstar1tv");
    };


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
    
    
    

    <View style={styles.pointview}>
    
    <Text style={styles.point}>3,000 CP</Text>
    
    </View> 

      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => console.log(text)}
        />
      </View>
      
      <Adimg />
      <View style={styles.smallButtonsContainer}>
      <TouchableOpacity style={styles.smallButton}onPress={()=>{navigation.navigate('Point');}}>
          <Text style={styles.smallbuttonText}>기프티콘</Text>
          </TouchableOpacity>
     
          <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallbuttonText}>자격증</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}onPress={() => examlink()}>
          <Image
            style={{
              width: "100%",
              height: 40,
            }}
            source={require('../img/exam2.png')}
          />
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}onPress={() => examlink()}>
           <Image
        style={{
          width: "100%",
          height: 40,
        }}
        source={require('../img/exam.png')}
        resizeMode="cover"
      />
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        

        <View style={styles.etc}>
        </View>
        
            </View>
        
       
        <BottomTabNav/>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#ffff',
paddingHorizontal: 0,
alignItems: 'center',


},
searchBar: {
  width: 360,
  height: 40,
  backgroundColor: '#ffff',
  borderRadius: 10,
  justifyContent: 'center',
  paddingLeft: 20,
  marginTop: 10,
  borderWidth:2,
  marginBottom:10,
},
pointview:{
    marginTop: 20,
    marginLeft:220,
},
point:{
    fontSize: 14,
    marginLeft:20,
    fontWeight: 450
    
},

searchInput: {
fontSize: 18,
color: '#292929',
},
buttonsContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'center',
alignItems: 'center',
marginTop: 5,
},

button: {
  width: 360,
  height: 60,
  borderRadius: 10,
  backgroundColor: '#ffffff',
  justifyContent: 'center',
alignItems: 'center',

  margin: 20,

  borderBottomWidth: 1,
  borderLeftWidth:1,
  borderRightWidth:1,
  borderTopWidth: 1,
  

},

buttonImage: {
width: '100%',
height: '100%',


},
buttonText: {
fontSize: 14,
fontWeight: 'bold',
color: '#292929',
},
smallButton: {
  width: 80,
  height: 30,
  fontSize: 14,
  fontWeight: 'bold',
  color: '#292929',
  borderBottomWidth: 1,
  borderLeftWidth:1,
  borderRightWidth:1,
  borderTopWidth: 1,
  marginHorizontal:5,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:10,
  marginBottom:20,

},
smallButtonsContainer: {
  
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,

  
  },

  smallbuttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#292929',
    },
   
    etc: {
  
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 100,
      
        
        },



  
});
