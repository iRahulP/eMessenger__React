import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAyvqhDsrI15iWEuufHHJoxisCr6okLcxE",
    authDomain: "emessenger-6f127.firebaseapp.com",
    projectId: "emessenger-6f127",
    storageBucket: "emessenger-6f127.appspot.com",
    messagingSenderId: "20073360654",
    appId: "1:20073360654:web:3e30797120ad7ea3a13b5f",
    measurementId: "G-ZZKPH9F787"
});

const db = firebaseApp.firestore();

export default db;