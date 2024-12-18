// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX5loW3GXYNDEUMyktuea-lWbsilLGBc4",
  authDomain: "dxc-login-f35aa.firebaseapp.com",
  projectId: "dxc-login-f35aa",
  storageBucket: "dxc-login-f35aa.firebasestorage.app",
  messagingSenderId: "209836391219",
  appId: "1:209836391219:web:aa18aa4cc8b0796f9edc46",
  measurementId: "G-XY6PNXJ67D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth() 