import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1WdV-y9KRZwKyO5DncJ0YqSbCBrgISqk",
  authDomain: "e-commerce-57800.firebaseapp.com",
  projectId: "e-commerce-57800",
  storageBucket: "e-commerce-57800.appspot.com",
  messagingSenderId: "982722283354",
  appId: "1:982722283354:web:734389744aea511e37d563"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db