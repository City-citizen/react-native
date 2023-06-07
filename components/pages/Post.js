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
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Adimg from "../compent/Adimg";
import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import {updateDoc ,getDoc , doc , increment, setDoc , collection , serverTimestamp, getDocs, query, where, orderBy, deleteDoc, addDoc} from "firebase/firestore";
import {auth, db } from "../firebase/firebase";
import BottomTabNav from "../compent/BottomTabNav";


export default function Post() {
  const navigation = useNavigation();
  const route = useRoute();

  const { postRef } = route.params;
  const [post, setPost] = useState(null);
  const [writer, setWriter ] = useState(null);
  
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
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const goodIncrease = async () => {
    if (boolGood == false) {
      setBoolGood(true);
      setGood(prevCount => prevCount + 1);
      try {
        const postDocRef = doc(db, "UnivercityPost", postRef);
        await updateDoc(postDocRef, { good: post.good + 1 });
        console.log("Firestore의 'good' 필드를 증가해서 업데이트했습니다.");
        
      } catch (error) {
        console.log("Firestore의 'good' 필드 업데이트 중 오류 발생:", error);
      }
    } else {
      setBoolGood(false);
      
      setGood(prevCount => prevCount - 1);
      try {
        const postDocRef = doc(db, "UnivercityPost", postRef);
        await updateDoc(postDocRef, { good: post.good - 1 });
        console.log("Firestore의 'good' 필드를 감소해서 업데이트했습니다.");
        
      } catch (error) {
        console.log("Firestore의 'good' 필드 업데이트 중 오류 발생:", error);
      }
    }
  };



const badIncrease = async () => {
  if (!boolBad) {
    setBoolBad(!boolBad);
    setBad(prevCount => prevCount + 1);
    try {
      const postDocRef = doc(db, "UnivercityPost", postRef);
      await updateDoc(postDocRef, { bad: post.bad + 1 });
      console.log("Firestore의 'bad' 필드를 업데이트했습니다.");
    } catch (error) {
      console.log("Firestore의 'bad' 필드 업데이트 중 오류 발생:", error);
    }
  } else {
    setBoolBad(!boolBad);
    setBad(prevCount => prevCount - 1);
    try {
      const postDocRef = doc(db, "UnivercityPost", postRef);
      await updateDoc(postDocRef, { good: post.bad - 1 });
      console.log("Firestore의 'bad' 필드를 업데이트했습니다.");
    } catch (error) {
      console.log("Firestore의 'bad' 필드 업데이트 중 오류 발생:", error);
    }
  }
};

const reportIncrease = async () => {
  try {
    const postDocRef = doc(db, "UnivercityPost", postRef);
    await updateDoc(postDocRef, { report: increment(1) });
    console.log("Firestore의 'report' 필드를 증가해서 업데이트했습니다.");

    const reportSnapshot = await getDoc(postDocRef);
    const reportCount = reportSnapshot.data().report;

    if(reportCount == 5){
      const reportData = {
        postRef: postRef,
        timestamp: serverTimestamp(),
        title: reportSnapshot.data().title,
        content: reportSnapshot.data().content,
        userUid: reportSnapshot.data().userUid,
        bad: reportSnapshot.data().bad,
        sanctions: 0,
        save: 0,

      }
      const reportDocRef = await addDoc(collection(db, "report"), reportData);
      console.log("게시판의 신고수가 5를넘어 신고게시판으로 이동하였습니다",reportDocRef.id);

    }

  } catch (error) {
    console.log("Firestore의 'report' 필드 업데이트 중 오류 발생:", error);
  }
  
};

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

const submitComment = async ()=>{
  const user = auth.currentUser
  const userRef = doc(collection(db,"users"), user.uid);
  const userDoc = await getDoc(userRef);

  if(userDoc.exists()){

    const majorValue = userDoc.data().major;
    
    const commentRef = doc(collection(db, "Univercitycomment"));
    await setDoc(commentRef, {
    comment : comment ,
    userUid : user.uid,
    good : 0,
    bad : 0,
    createdAt : serverTimestamp(),
    postRef : postRef,
    commentRef : commentRef.id,
    major : majorValue,

  });
  console.log("파이어베이스에 Univercitycomment를 추가하였습니다");

  }else{
    console.log("사용자 문서를 찾을 수 없습니다");
  }

  
setComment('');
}

const fetchComments = async () => {
  try {
    // Query the "comments" collection for comments related to the current post    
    const commentsSnapshot = await getDocs(
      query(collection(db, "Univercitycomment"), where("postRef", "==", postRef))
    );
    

    // Map the comments snapshot to an array of comment objects
    const commentsData = commentsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Set the comments state
    setComments(commentsData);
  } catch (error) {
    console.log("Error fetching comments:", error);
  }
};

const deletepost = async()=>{
  const user = auth.currentUser;

  const postDocRef = doc(db, "UnivercityPost", postRef);
  const postDocSnap = await getDoc(postDocRef);
  const postData = postDocSnap.data();
  const writerUid = postData.userUid;


  if(user.uid == writerUid){
    try{
    await deleteDoc(doc(db, "UnivercityPost", postRef))
    console.log('게시물이 삭제되었습니다');

  } catch (error){
    console.error('게시물 삭제 중 오류가 발생하였습니다', error);
  }}else{
    console.log('게시물의 사용자가 아닙니다');
  }

}

useEffect(()=>{
  const fetchPostData = async () =>{
    try {


      const postDocRef = doc(db, "UnivercityPost", postRef);
      const postDocSnap = await getDoc(postDocRef);
      
      


      if(postDocSnap.exists()){
        const postData = postDocSnap.data();
        const writerUid = postData.userUid;

        const userDocRef = doc(db, "users", writerUid);
        const userDocSnap = await getDoc(userDocRef);

        

        if(userDocSnap.exists()) {
          const writerData = userDocSnap.data();
          setWriter(writerData);
          console.log(writerData);
        }else{
          console.log("글쓴이정보를 찾을수없습니다");
        }

        setPost(postData);
        
      }else {
        console.log("게시물이 존재하지않습니다");
      }
      
    }catch (error){
      console.log("데이터가져오는도중오류발생", error)
    }
  };
  fetchPostData();

}, [postRef]);

useEffect(()=>{
  fetchComments();
}, []);

return (
  <View style={styles.container}>
    
    <Modal
      visible={modalVisible}
      animationType="none"
      //presentationStyle="formSheet"
      //transparent={true}
    >
      {/* 게시물 모달 */}
      <View style={styles.modal}>
        <TouchableOpacity style={styles.modalbutton}>
          <Text style={styles.modalText}>프로필 보기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalbutton} onPress={reportIncrease}>
          <Text style={styles.modalText}>신고하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalbutton}>
          <Text style={styles.modalText}>공유하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalbutton} onPress={deletepost}>
          <Text style={styles.modalText}>삭제하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalbutton}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <Text style={styles.modalText}>닫기</Text>
        </TouchableOpacity>
      </View>
    </Modal>

    {/* 댓글 모달 */}
    <Modal
      visible={replymodalVisible}
      animationType="none"
      //presentationStyle='formSheet'
      transparent={true}
    >
      <View style={styles.replymodal}>
        <TouchableOpacity style={styles.modalbutton}>
          <Text style={styles.modalText}>프로필 보기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalbutton}>
          <Text style={styles.modalText}>신고하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalbutton}
          onPress={() => {
            setreplyModalVisible(false);
          }}
        >
          <Text style={styles.modalText}>닫기</Text>
        </TouchableOpacity>
      </View>
    </Modal>

    <View style={{ alignItems: "flex-start" }}>
      <View style={styles.profilebox}>
        <View style={styles.profile}></View>
        <View>
          <Text style={styles.info}>
            {writer?.major}({writer?.name})
          </Text>
          <Text style={styles.date}>
            {post?.createdAt?.toDate().toString()}
          </Text>
        </View>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={25}
          color="black"
          style={{ marginLeft:75 }}
          onPress={() => setModalVisible(true)}
        />
      </View>

      <View style={styles.postbox}>
        <Text style={styles.title}>{post?.title}</Text>
        <Text style={styles.content}>{post?.content}</Text>
        <View style={{ flexDirection: "row", alignItems: "flex-end",marginTop:5 }}>
        <MaterialIcons
          name="thumb-up"
          size={20}
          color="black"
          style={{marginLeft:15 }}
        />
        <Text style={{marginLeft:5}}>
          {post?.good}
        </Text>
        <MaterialIcons
          name="thumb-down"
          size={20}
          color="black"
          style={{ marginLeft:5 }}
        />
        <Text style={{ marginLeft:5 }}>
          {post?.bad}
        </Text>
      </View>
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.button} onPress={goodIncrease}>
          <MaterialIcons name="thumb-up" size={20} color="black" />
          <Text>공감</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={badIncrease}>
          <MaterialIcons name="thumb-down" size={20} color="black" />
          <Text>비공감</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="bookmark-outline" size={20} color="black" />
          <Text>보관</Text>
        </TouchableOpacity>
      </View>

      <Adimg />

      <View style={styles.input}>
        <TextInput
          style={{
            width: 320,
            borderColor: "black",
            fontSize: 15,
            height: 30,
            marginTop: 3,
            marginLeft: 3,
          }}
          value ={comment}
          onChangeText={(text)=>setComment(text)}
          placeholder="댓글을 입력하세요"
          placeholderTextColor="gray"
        />
        <TouchableOpacity onPress={submitComment}>
          <MaterialIcons
            name="send"
            size={20}
            color="black"
            style={{ marginTop: 9, marginLeft: 3 }}
          />
        </TouchableOpacity>
      </View>
          
          
      <View>
  {comments.map((comment) => (
    <View key={comment.id}>
      <View style={styles.profilebox}>
        <View style={styles.profile}></View>
        <View>
          <Text style={styles.info}>{comment.major}</Text>
          <Text style={styles.date}>(ax123)</Text>
        </View>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={25}
          color="black"
          style={{ marginLeft:250 }}
          onPress={() => setreplyModalVisible(true)}
        />
      </View>

      <View style={styles.postbox}>
        <Text style={styles.content}>{comment.comment}</Text>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <MaterialIcons
            name="thumb-up"
            size={17}
            color="black"
            onPress={replgoodIncrease}
            style={{ marginLeft: 300 }}
          />
          <Text style={{ marginLeft: 5 }}>{comment.good}</Text>
          <MaterialIcons
            name="thumb-down"
            size={17}
            color="black"
            onPress={replbadIncrease}
            style={{ marginLeft: 5 }}
          />
          <Text style={{ marginLeft: 5 }}>{comment.bad}</Text>
        </View>
      </View>
    </View>
  ))}
</View>
    </View>

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
info: {
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
  marginBottom: 10,
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
  flexDirection: "row",
},
input: {
  height: 40,
  width: 360,
  borderColor: "black",
  borderWidth: 2,
  borderRadius: 10,
  justifyContent: "center",
  color: "white",
  flexDirection: "row",
  marginBottom: 10,
  marginLeft:15,
  marginTop:10,
},
modal: {
  borderColor: "black",
  borderRadius: 10,
  borderWidth: 2,
  backgroundColor: "white",
  width: "40%",
  position: "absolute",
  right: "10%",
  top: "18%",
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
  top: "55%",
},
});