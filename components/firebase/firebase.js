
import {firebaseConfig} from './firebaseconfig'
import { getAuth , onAuthStateChanged , signOut} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from 'firebase/app';





const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export {app , db, auth };

export function signIn({auth, email, password}){
    return signInWithEmailAndPassword(auth , email, password);
}

export function signUp({auth, email, password}){
    return createUserWithEmailAndPassword(auth, email, password);
}

export function signOutUser(){
    signOut(auth);
}

onAuthStateChanged(auth, (user)=>{
    if(user){
        console.log("사용자가 로그인했습니다");
        console.log("사용자 정보 :", user);
        
        //setuserdata(user);
        
    }else {
        console.log("사용자가 로그아웃했습니다");
        //setuserdata(null);
    }
})