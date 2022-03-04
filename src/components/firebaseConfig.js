// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7ONn0CXx7XmKB2JBAulsF7D_dCeFzMic",
  authDomain: "flores-guitarras.firebaseapp.com",
  projectId: "flores-guitarras",
  storageBucket: "flores-guitarras.appspot.com",
  messagingSenderId: "617709484209",
  appId: "1:617709484209:web:0074881fe9dd91054c4a90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;