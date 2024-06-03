// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6gIt8qDsco20YaVZ9we5UfBOqsub7Oz0",
  authDomain: "learning-firebase-c5289.firebaseapp.com",
  projectId: "learning-firebase-c5289",
  storageBucket: "learning-firebase-c5289.appspot.com",
  messagingSenderId: "876188027088",
  appId: "1:876188027088:web:964896a3fa0ca0b10ab6d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export default app;
