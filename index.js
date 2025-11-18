// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdxLfIfQL-M18y8zQl5aE1z3AccNWslBk",
  authDomain: "lifetrackerid.firebaseapp.com",
  projectId: "lifetrackerid",
  storageBucket: "lifetrackerid.firebasestorage.app",
  messagingSenderId: "76945546748",
  appId: "1:76945546748:web:f5bc9009e19640226f2679"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
