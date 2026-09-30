import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKmtouyGumC5Fq28p7Q-370PsGIby_bcA",
  authDomain: "darb-efdb5.firebaseapp.com",
  projectId: "darb-efdb5",
  storageBucket: "darb-efdb5.firebasestorage.app",
  messagingSenderId: "634130876571",
  appId: "1:634130876571:web:8b6ac83144657e52a31e3e",
  measurementId: "G-XQ5L8D4HY9"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

export default app;
