// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgqBH6XwegcWhGJPyghVvqI_P0QWOrBjQ",
  authDomain: "react-firebase-a32b2.firebaseapp.com",
  projectId: "react-firebase-a32b2",
  storageBucket: "react-firebase-a32b2.appspot.com",
  messagingSenderId: "481398523367",
  appId: "1:481398523367:web:37c341dcd977e61a612942"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const db = getFirestore(app);

export default db;