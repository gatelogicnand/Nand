import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyAL7caZuET_FkLUQih1Ay-MhOnBd8yzxSo",
  authDomain: "cloud-angga-4bc49.firebaseapp.com",
  projectId: "cloud-angga-4bc49",
  storageBucket: "cloud-angga-4bc49.firebasestorage.app",
  messagingSenderId: "737726123990",
  appId: "1:737726123990:web:f62af405cbb37149855e77",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user.uid);
        const docRef = doc(db, "users", user.uid);
        
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    document.getElementById('loggedUserFName').innerText = userData.firstName;
                    document.getElementById('loggedUserEmail').innerText = userData.email;
                    document.getElementById('loggedUserLName').innerText = userData.lastName;
                } else {
                    console.log("No document found for this user in Firestore!");
                }
            })
            .catch((error) => {
                console.error("Error getting document:", error);
            });
    } else {
        console.log("No user is signed in. Redirecting to login page.");
        window.location.href = 'index.html';
    }
});

const logoutButton = document.getElementById('logout');

if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUserId');
        signOut(auth)
            .then(() => {
                console.log("Sign-out successful.");
                window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('Error Signing out:', error);
            });
    });
} else {
    console.error("Logout button element not found!");
}