import React from 'react';
import { ScrollView,StyleSheet, View, TextInput, TouchableWithoutFeedback, Text, Image,TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BottomTabNav from "../compent/BottomTabNav";
import Adimg from "../compent/Adimg";

export default function Point() {
  
  const navigation = useNavigation();

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
          <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallbuttonText}>기프티콘</Text>
          </TouchableOpacity>
     
          <TouchableOpacity style={styles.smallButton}onPress={()=>{navigation.navigate('License');}}>
          <Text style={styles.smallbuttonText}>자격증</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('EachPoint');}}> 
          <Image
            style={styles.buttonImage}
            source={require('../img/candy.jpg')}
          />
          <Text style={styles.buttonText}>츄팝츄스</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('EachPoint');}}> 
          <Image
            style={styles.buttonImage}
            source={require('../img/gimbap.jpg')}
          />
          <Text style={styles.buttonText}>삼각김밥</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('EachPoint');}}> 
          <Image
            style={styles.buttonImage}
            source={require('../img/lunchbox.jpg')}
          />
          <Text style={styles.buttonText}>도시락</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('EachPoint');}}> 
          <Image
            style={styles.buttonImage}
            source={require('../img/cupramen.jpg')}
          />
          <Text style={styles.buttonText}>참깨라면</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('EachPoint');}}> 
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
justifyContent: 'center',

},
searchBar: {
  width: '90%',
  height: 30,
  backgroundColor: '#ffff',
  borderRadius: 25,
  justifyContent: 'center',
  paddingLeft: 20,
  marginTop: 10,
  borderBottomWidth: 1,
  borderLeftWidth:1,
  borderRightWidth:1,
  borderTopWidth: 1,
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