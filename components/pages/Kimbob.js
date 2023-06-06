import React, { useState } from 'react';
import { ScrollView,StyleSheet, View, TextInput, TouchableWithoutFeedback, Text, Image,TouchableOpacity,Button } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BottomTabNav from "../compent/BottomTabNav";
import Adimg from "../compent/Adimg";
import { getFirestore, doc, updateDoc, increment, getDoc } from 'firebase/firestore';
import {auth} from "../firebase/firebase";

const image = require('../img/gimbap.jpg');
const db = getFirestore(); // Firestore 인스턴스를 가져와서 db 변수 초기화


export default function EachPoint() {
    const [message, setMessage] = useState('');
    const navigation = useNavigation();

    const onPressButton = async () => {
      // Firebase Firestore에서 문서 업데이트
      const user = auth.currentUser;
      const washingtonRef = doc(db, "users", user.uid);
      const decrementAmount = 1000;
    
      // 포인트 확인
      const docSnap = await getDoc(washingtonRef);
      if (docSnap.exists()) {
        const currentPoints = docSnap.data().point;
        if (currentPoints >= decrementAmount) {
          await updateDoc(washingtonRef, { point: increment(-decrementAmount) });
    
          setMessage('구매가 완료되었습니다.');
          setTimeout(() => {
            setMessage('');
          }, 5000);
        } else {
          setMessage('포인트가 부족합니다.');
        }
      } else {
        setMessage('사용자 문서를 찾을 수 없습니다.');
      }
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
    <Adimg/>
    <View style={styles.smallButtonsContainer}>
      <TouchableOpacity style={styles.smallButton}onPress={()=>{navigation.navigate('Point');}}>
          <Text style={styles.smallbuttonText}>기프티콘</Text>
          </TouchableOpacity>
     
          <TouchableOpacity style={styles.smallButton}onPress={()=>{navigation.navigate('License');}}>
          <Text style={styles.smallbuttonText}>자격증</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.a}>
      <Image source={image} style={styles.image} />
      <Text style={styles.buttonText}>삼각김밥
      1000cp</Text>
      <Button
      style={styles.button}
        title="구매하기"
        
        onPress={onPressButton}
        
        
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold',marginTop: 20}}>{message}</Text>
      </View>
      <BottomTabNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    backgroundColor: '#ffff',
  },
  a: {
    width: '70%',
    height: '60%',
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderBottomWidth: 1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth: 1,
    },
    buttonText:{
      marginTop: 5,
    },

    image: {
      width: 200,
      height: 200,
      
    },

    button: {
      marginTop: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#F08080',
      padding: 100,
      width: '60%',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderLeftWidth:1,
      borderRightWidth:1,
      borderTopWidth: 1,
    },



  image: {
    width: 200,
    height: 200,
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
    marginBottom: 20,
  
    
    },
  
    smallbuttonText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#292929',
      },

});