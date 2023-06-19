// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "astrotech-d9866.firebaseapp.com",
  projectId: "astrotech-d9866",
  storageBucket: "astrotech-d9866.appspot.com",
  messagingSenderId: "1031811524383",
  appId: "1:1031811524383:web:3eab8c97eab769060d722a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }