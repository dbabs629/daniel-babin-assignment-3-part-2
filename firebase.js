import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCNaiOPPDisxU3T4rsEtIRKYsrpU-8w8IE",
    authDomain: "spanish-assignment3.firebaseapp.com",
    databaseURL: "https://spanish-assignment3.firebaseio.com",
    projectId: "spanish-assignment3",
    storageBucket: "spanish-assignment3.appspot.com",
    messagingSenderId: "450940869752",
    appId: "1:450940869752:web:19222672f726647e6f218d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

