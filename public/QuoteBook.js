// quoteBook.js
import { db } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

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
  quoteList.innerHTML = "";
  const snapshot = await getDocs(collection(db, "quotes"));
  snapshot.forEach((docSnap) => {
    const li = document.createElement("li");
    li.textContent = docSnap.data().text;

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
