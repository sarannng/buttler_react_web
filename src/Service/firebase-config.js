// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Gy4HAnKTzmiWn6x12Lxd7WYZiw8i1aU",
  authDomain: "cafemanager-e1fc5.firebaseapp.com",
  databaseURL: "https://cafemanager-e1fc5.firebaseio.com",
  projectId: "cafemanager-e1fc5",
  storageBucket: "cafemanager-e1fc5.appspot.com",
  messagingSenderId: "756067668528",
  appId: "1:756067668528:web:443c0c6ffee5fa8ba993f5",
  measurementId: "G-1DNL6ZT9RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
