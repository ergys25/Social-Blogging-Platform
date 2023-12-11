import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";



const firebaseConfig = {
    apiKey: "AIzaSyC2QqnV1JA3SBENzIycOs7KUOS4ENrRxZ8",
    authDomain: "fir-d06ee.firebaseapp.com",
    projectId: "fir-d06ee",
    storageBucket: "fir-d06ee.appspot.com",
    messagingSenderId: "1027974662903",
    appId: "1:1027974662903:web:45533272f94ea1d1cd21f2",
    measurementId: "G-QPWFLVMED4"
  };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();
    export const storage = firebase.storage();
    export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

