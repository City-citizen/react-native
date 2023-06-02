import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Adimg from "../compent/Adimg";
import { useState, useCallback } from "react";
import axios from 'axios';

export default function Post() {
  const navigation = useNavigation();
  
  const [modalVisible, setModalVisible] = useState(false);
  const [replymodalVisible, setreplyModalVisible] = useState(false);
  const [boolGood, setBoolGood] = useState(false);
  const [boolBad, setBoolBad] = useState(false);
  const [boolreplGood, setreplBoolGood] = useState(false);
  const [boolreplBad, setreplBoolBad] = useState(false);
  const [feeling, setFeeling] = useState(false);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [replgood, setreplGood] = useState(0);
  const [replbad, setreplBad] = useState(0);

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

  const replgoodIncrease = () => {
    if(boolreplGood==false) {
      setreplBoolGood(!boolreplGood);
      setreplGood(prevCount => prevCount + 1);
    }
    else {
      setreplBoolGood(!boolreplGood);
      setreplGood(prevCount => prevCount - 1);
  }
}

  const replbadIncrease = () => {
    if(boolreplBad==false) {
      setreplBoolBad(!boolreplBad);
      setreplBad(prevCount => prevCount + 1);
    }
    else {
      setreplBoolBad(!boolreplBad);
      setreplBad(prevCount => prevCount - 1);
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
      <Modal
        visible={modalVisible}
        animationType="none"
        presentationStyle="formSheet"
        transparent={true}
      >
        {/* 게시물 모달 */}
        <View style={styles.modal}>
          <TouchableOpacity style={styles.modalbutton}
          onPress={() => {
            navigation.navigate("MyPage");
            setModalVisible(false);
          }}>
            <Text style={styles.modalText}>프로필 보기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalbutton}>
            <Text style={styles.modalText}>신고하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalbutton}>
            <Text style={styles.modalText}>공유하기</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.modalbutton}
          onPress={() => {
            setModalVisible(false) } 
            }>
            <Text style={styles.modalText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* 댓글 모달 */}
      <Modal
        visible={replymodalVisible}
        animationType="none"
        presentationStyle='formSheet'
        transparent={true}
      >
        <View style={styles.replymodal}>
          <TouchableOpacity style={styles.modalbutton}
          onPress={() => {
            navigation.navigate("MyPage");
            setreplyModalVisible(false);
          }}>
            <Text style={styles.modalText}>프로필 보기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalbutton}>
            <Text style={styles.modalText}>신고하기</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.modalbutton}
          onPress={() => {
            setreplyModalVisible(false) } 
            }>
            <Text style={styles.modalText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>

        <View style={{alignItems: "flex-start"}}>
          <View style={styles.profilebox}>
            <View style={styles.profile}></View>
            <View>
              <Text style={styles.info}>컴퓨터공학과(ax123)</Text>
              <Text style={styles.date}>2012/11/24 14:59</Text>
            </View>
            <MaterialCommunityIcons name="dots-vertical" size={25} color="black" style={{position:"absolute", right: "6%", bottom: "2%"}}
            onPress={() => setModalVisible(true)}/>
          </View>

          <View style={styles.postbox}>
            <Text style={styles.title}>개굴개굴</Text>
            <Text style={styles.content}>개굴개굴개굴</Text>
            <MaterialIcons name="thumb-up" size={20} color="black" style={{position:"absolute", left: "15%", bottom: "0%"}} />
            <Text style={{position:"absolute", left: "12%", bottom: "0%"}}>{good}</Text>
            <MaterialIcons name="thumb-down" size={20} color="black" style={{position:"absolute", left: "5%" , bottom: "0%"}}/>
            <Text style={{position:"absolute", left: "23%", bottom: "0%"}}>{bad}</Text>
          </View>

          <View style={{width: "100%", display:"flex", flexDirection:"row", justifyContent: "center", alignItems:"center"}}>
            <TouchableOpacity style={styles.button} onPress={goodIncrease}>
            <MaterialIcons name="thumb-up"size={20} color="black" />
              <Text>공감</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={badIncrease}>
            <MaterialIcons name="thumb-down"size={20} color="black" />
              <Text>비공감</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate("Mark");
            }}>
            <MaterialIcons name="bookmark-outline"size={20} color="black" />
              <Text>보관</Text>
            </TouchableOpacity>
          </View>

          <Adimg />
          <View style={styles.profilebox}>
            <View style={styles.profile}></View>
            <View>
              <Text style={styles.info}>컴퓨터공학과</Text>
              <Text style={styles.date}>(ax123)</Text>
            </View>
              <MaterialCommunityIcons name="dots-vertical" size={25} color="black" style={{position:"absolute", right: "6%", bottom: "2%"}}
              onPress={() => setreplyModalVisible(true)} />
          </View>

          <View style={styles.postbox}>
            <Text style={styles.content}>개굴개굴개굴</Text> 
            <MaterialIcons name="thumb-up" size={17} color="black" onPress={replgoodIncrease} style={{position:"absolute", right: "22%", bottom: "0%"}} />
            <Text style={{position:"absolute", right: "19%", bottom: "0%"}}>{replgood}</Text>
            <MaterialIcons name="thumb-down" size={17} color="black" onPress={replbadIncrease} style={{position:"absolute", right: "11%" , bottom: "0%"}}/>
            <Text style={{position:"absolute", right: "8%", bottom: "0%"}}>{replbad}</Text>
          </View>
          
        </View>
        <TextInput
          style={styles.input}
          placeholder="댓글을 입력하세요">
        </TextInput>
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
    backgroundColor: "white",
  },
  postbox: {
    position: "relative",
    paddingBottom: 40,
    marginBottom: 15,
    width: "100%",
    backgroundColor: "white",
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: 70,
    height: 30,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    flexDirection: "row"
  },
  input: {
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 17,
    width: "90%",
    height: "5%",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "5%",
    marginRight: "5%",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: "5%",
    backgroundColor: "white",
  },
  modal: {
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "white",
    width: "40%",
    position: "absolute",
    right: "10%",
    top: "18%"
  },
  modalbutton: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 3,
  },
  modalText: {
    fontSize: 17,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 3,
  },
  replymodal: {
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "white",
    width: "40%",
    position: "absolute",
    right: "10%",
    top: "55%"
  },
});
