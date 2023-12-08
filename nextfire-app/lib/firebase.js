import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyD9wlEsdWSGU4hnX1TdAng6E2a5AaFzyTM",
    authDomain: "nextfire-app-4d224.firebaseapp.com",
    projectId: "nextfire-app-4d224",
    storageBucket: "nextfire-app-4d224.appspot.com",
    messagingSenderId: "355385075534",
    appId: "1:355385075534:web:5632bdb86d5450984aa01f",
    measurementId: "G-2EM596QMV6"
  };

if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
  