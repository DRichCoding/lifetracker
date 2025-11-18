import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCdxLfIfQL-M18y8zQl5aE1z3AccNWslBk",
  authDomain: "life-tracker-dan.firebaseapp.com",
  projectId: "life-tracker-dan",
  storageBucket: "life-tracker-dan.firebasestorage.app",
  messagingSenderId: "76945546748",
  appId: "1:76945546748:web:f5bc9009e19640226f2679"
};

// Initialize Firebase + Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// References
const quoteInput = document.getElementById("quoteInput");
const saveBtn = document.getElementById("saveBtn");
const showBtn = document.getElementById("showBtn");
const quoteList = document.getElementById("quoteList");

// Save quote
saveBtn.addEventListener("click", async () => {
  const text = quoteInput.value.trim();
  if (text) {
    await addDoc(collection(db, "quotes"), { text });
    quoteInput.value = "";
    alert("Quote saved!");
  }
});

// Show all quotes
showBtn.addEventListener("click", async () => {
  quoteList.innerHTML = ""; // clear list
  const snapshot = await getDocs(collection(db, "quotes"));
  snapshot.forEach((docSnap) => {
    const li = document.createElement("li");
    li.textContent = docSnap.data().text;

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = async () => {
      await deleteDoc(doc(db, "quotes", docSnap.id));
      li.remove();
    };

    li.appendChild(delBtn);
    quoteList.appendChild(li);
  });
});
