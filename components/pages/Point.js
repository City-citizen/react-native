import React from 'react';
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Text, Image,TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BottomTabNav from "../compent/BottomTabNav";
import Adimg from "../compent/Adimg";
import { auth , db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import {useEffect, useState } from "react";

export default function Point() {
  
  const navigation = useNavigation();
  const [point, setPoint] = useState("");

  useEffect(() => {
    const getUserDatapoint = async () => {
      try {

        const user = auth.currentUser;
        const uid = user.uid;

        if (!user) {
          console.log("사용자를 찾을 수 없습니다.");
          return;
        }
  
        const q = query(collection(db, "users"), where("userUid", "==", uid));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            setPoint(userData.point);
          });
        } else {
          console.log("사용자 문서를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.log("데이터를 가져오는 중에 오류가 발생했습니다.", error);
      }
    };
  
    getUserDatapoint();
  }, []);

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
    
    <Text style={styles.point}>{point} cp</Text>
    
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
          <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallbuttonText}>기프티콘</Text>
          </TouchableOpacity>
     
          <TouchableOpacity style={styles.smallButton}onPress={()=>{navigation.navigate('License');}}>
          <Text style={styles.smallbuttonText}>자격증</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Candy');}}> 
          <Image
            style={styles.buttonImage}
            source={require('../img/candy.jpg')}
          />
          <Text style={styles.buttonText}>츄팝츄스</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Kimbob');}}> 
          <Image
            style={styles.buttonImage}
            source={require('../img/gimbap.jpg')}
          />
          <Text style={styles.buttonText}>삼각김밥</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Lunchbox');}}> 
          <Image
            style={styles.buttonImage}
            source={require('../img/lunchbox.jpg')}
          />
          <Text style={styles.buttonText}>도시락</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Cocacola');}}> 
          <Image
            style={styles.buttonImage}
            source={require('../img/drink.jpg')}
          />
          <Text style={styles.buttonText}>코카콜라</Text>
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
  width: 120,
  height: 120,
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
width: 70,
height: 80,
marginBottom: 5,
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