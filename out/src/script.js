import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAI2-mD6RPKCTHuDUEJ2lh1NMcXDczCB_Q",
  authDomain: "theswirl.firebaseapp.com",
  projectId: "theswirl",
  storageBucket: "theswirl.appspot.com",
  messagingSenderId: "483208359881",
  appId: "1:483208359881:web:fcb8f2323d7913b8494218",
  measurementId: "G-Q1ZVJ2WGPE"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);
var user_data_object = {}


//AUTH
//if user sign in check
auth.onAuthStateChanged((user) => {
  if (user) {
    user_data_object = user
    console.log(user_data_object);
    document.getElementById('profile_img').src = user_data_object.photoURL
    document.getElementById('name').innerText = user_data_object.displayName
  } else {
    location.href = 'accounts.html'
  }
});
//user sign out
document.getElementById("sign_out").onclick = function () {
  signOut(auth).then(() => {
    console.log("signed out");
  }).catch((error) => {
    console.error(error);
  });
}


//DATABASE
// try {
//   await setDoc(doc(db, "users", 'ls'), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });

//   console.log("Document written with ID: ");
// } catch (e) {
//   console.error("Error adding document: ", e);
// }