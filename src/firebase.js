// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBamDOLDoKN1JZYLLMIWn501s0ScVqmFVg",
  authDomain: "todos-24254.firebaseapp.com",
  projectId: "todos-24254",
  storageBucket: "todos-24254.appspot.com",
  messagingSenderId: "571770860690",
  appId: "1:571770860690:web:9ac68a3e5788eeb606624b",
  databaseURL:'https://todos-24254-default-rtdb.europe-west1.firebasedatabase.app/'
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
