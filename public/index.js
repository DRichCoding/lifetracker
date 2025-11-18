// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdxLfIfQL-M18y8zQl5aE1z3AccNWslBk",
  authDomain: "lifetrackerid.firebaseapp.com",
  projectId: "lifetrackerid",
  storageBucket: "lifetrackerid.firebasestorage.app",
  messagingSenderId: "76945546748",
  appId: "1:76945546748:web:f5bc9009e19640226f2679"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
