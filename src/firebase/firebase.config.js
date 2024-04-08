// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBADrCAF0SOA2ANRpEHer-KFOx0ALFsuIQ",
  authDomain: "my-dragon-news-auth-ec039.firebaseapp.com",
  projectId: "my-dragon-news-auth-ec039",
  storageBucket: "my-dragon-news-auth-ec039.appspot.com",
  messagingSenderId: "962490048284",
  appId: "1:962490048284:web:3e4379d5eb8f4f59af64d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;