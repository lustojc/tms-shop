import firebase from "firebase"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyA_JjwfG3rq00ML6OpxovIL4qBygal5Bp0",
    authDomain: "final-shop-c51a1.firebaseapp.com",
    projectId: "final-shop-c51a1",
    storageBucket: "final-shop-c51a1.appspot.com",
    messagingSenderId: "989383555502",
    appId: "1:989383555502:web:f2bc4cd95707f942a4303f",
    measurementId: "G-VXVMR3SNV0"
  });
  firebase.analytics();
  
  export default app;