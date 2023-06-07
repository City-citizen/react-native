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

    const examlink5 = () => {
      Linking.openURL("https://www.pqi.or.kr/indexMain.do");
    };

    const examlink3 = () => {
      Linking.openURL("https://free.ybmclass.com/free/index.asp");
    };

    const examlink6 = () => {
      Linking.openURL("https://gosi.hackers.com/html/mmove.htm?id=freelecture&_ga=2.192705130.1732688897.1686069023-690568966.1686069022");
    };

    const examlink2 = () => {
      Linking.openURL("https://www.youtube.com/watch?v=DSXQ80e14kA&list=PL6i7rGeEmTvoDgmkQsg8kUjunIR_G7Njr");
    };


  return (
    <View style={styles.container}>
      <ScrollView>
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
    
    <Text style={styles.point}>0 cp</Text>
    
    </View> 
    <View style={styles.Bar}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => console.log(text)}
        />
      </View>
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
        <TouchableOpacity style={styles.button}onPress={() => examlink5()}>
          <Image
            style={styles.buttonImage5}
            source={require('../img/exam5.png')}
          />
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}onPress={() => examlink()}>
          <Image
            style={styles.buttonImage1}
            source={require('../img/exam.png')}
          />
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}onPress={() => examlink3()}>
          <Image
            style={styles.buttonImage2}
            source={require('../img/exam4.png')}
          />
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}onPress={() => examlink2()}>
          <Image
            style={styles.buttonImage}
            source={require('../img/exam3.png')}
          />
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}onPress={() => examlink6()}>
          <Image
            style={styles.buttonImage6}
            source={require('../img/exam6.png')}
          />
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>

        <View style={styles.etc}>
        </View>
        
            </View>
        
       
        
        </ScrollView>
        <BottomTabNav/>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#ffff',
  alignItems: 'center',
  justifyContent: 'center',

},
Bar: {
  alignItems: 'center',
  justifyContent: 'center',

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
  marginLeft:'80%',
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
  width: 300,
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
width: 250,
height: 30,
marginTop:10,

},
buttonImage1: {
  width: 260,
  height: 50,
  marginTop:10,
  
  },
  buttonImage2: {
    width: 170,
    height: 50,
    marginTop:15,
    
    },
    buttonImage5: {
      width: 250,
      height: 40,
      marginTop:10,
      
      },
      buttonImage6: {
        width: 250,
        height: 48,
        marginTop:10,
        
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