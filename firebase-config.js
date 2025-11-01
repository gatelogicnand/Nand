// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Konfigurasi dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAL7caZuET_FkLUQih1Ay-MhOnBd8yzxSo",
  authDomain: "cloud-angga-4bc49.firebaseapp.com",
  projectId: "cloud-angga-4bc49",
  storageBucket: "cloud-angga-4bc49.firebasestorage.app",
  messagingSenderId: "737726123990",
  appId: "1:737726123990:web:f62af405cbb37149855e77",
};

// Inisialisasi Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);