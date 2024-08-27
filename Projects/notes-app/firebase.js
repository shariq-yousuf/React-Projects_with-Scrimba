// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLbAsnlBPLjP9WnGz5LKowzeZuiYo3s2E",
  authDomain: "react-notes-a7f30.firebaseapp.com",
  projectId: "react-notes-a7f30",
  storageBucket: "react-notes-a7f30.appspot.com",
  messagingSenderId: "240779463476",
  appId: "1:240779463476:web:61d7100dd12393dca47361",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
