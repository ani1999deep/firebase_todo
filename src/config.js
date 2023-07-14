// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsdsdbwydXSvU0NoQKTPi98Km6tl4Qapc",
  authDomain: "todo-app-6d481.firebaseapp.com",
  projectId: "todo-app-6d481",
  storageBucket: "todo-app-6d481.appspot.com",
  messagingSenderId: "1050991504805",
  appId: "1:1050991504805:web:5e311fddad01e72a0b4c4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)





const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};