import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDxdq6V24OJw9QGz5ssD0ltQUjYHemXgB0",
    authDomain: "facebook-messenger-clone-4fc4d.firebaseapp.com",
    projectId: "facebook-messenger-clone-4fc4d",
    storageBucket: "facebook-messenger-clone-4fc4d.appspot.com",
    messagingSenderId: "341611078801",
    appId: "1:341611078801:web:5641c5421e61a7853d8b30",
    measurementId: "G-F0RS2C7N71"
});

const db = firebaseApp.firestore();

export default db;