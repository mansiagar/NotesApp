// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ycubLhPMrkRlKLnVVZYDCyldsjVJE4I",
  authDomain: "notesapp-634d1.firebaseapp.com",
  projectId: "notesapp-634d1",
  storageBucket: "notesapp-634d1.firebasestorage.app",
  messagingSenderId: "292878683063",
  appId: "1:292878683063:web:7832e1487f6141a3a6f632",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
