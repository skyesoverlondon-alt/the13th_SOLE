import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_tp_Yll0eTa1dYOiKzGFGdamZfOdsyGw",
  authDomain: "solenterprises-58215.firebaseapp.com",
  projectId: "solenterprises-58215",
  storageBucket: "solenterprises-58215.firebasestorage.app",
  messagingSenderId: "287667620838",
  appId: "1:287667620838:web:dd53eaf1712cb0175e2427",
  measurementId: "G-JLW0GMK1CJ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
