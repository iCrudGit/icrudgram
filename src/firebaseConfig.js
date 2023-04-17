// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyA8_tS8M5qGXvlBdDmKCf5Yzet_Vux3Aww",

  authDomain: "reacttailwind-3c613.firebaseapp.com",

  projectId: "reacttailwind-3c613",

  storageBucket: "reacttailwind-3c613.appspot.com",

  messagingSenderId: "731545342778",

  appId: "1:731545342778:web:9e3e49cef34f30f7083603",

  measurementId: "G-1WMQETDLE9"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app)

export {app, fireDb}