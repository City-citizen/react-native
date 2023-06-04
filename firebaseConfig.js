import firebase from "firebase/compat/app";

/* import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions"; */
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACVo5x_8kW5QkxxruIUddZnIJ2GTixtdo",
  authDomain: "city-ad8d9.firebaseapp.com",
  projectId: "city-ad8d9",
  databaseURL: "https://city-ad8d9-default-rtdb.firebaseio.com/",
  storageBucket: "city-ad8d9.appspot.com",
  messagingSenderId: "131689319897",
  appId: "1:131689319897:web:aa716064112379b51fddc8",
  measurementId: "G-27QM4ETQ9S",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();
