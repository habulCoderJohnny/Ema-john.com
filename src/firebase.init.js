// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSxyIWopxYPXsK56cL7YSzNUywsjqCLEU",
  authDomain: "ema-john-authentications.firebaseapp.com",
  projectId: "ema-john-authentications",
  storageBucket: "ema-john-authentications.appspot.com",
  messagingSenderId: "968742007771",
  appId: "1:968742007771:web:6fd969e88aba88840bedfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;