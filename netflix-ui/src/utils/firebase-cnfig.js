
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAerQ8SuHl0X6AIE04JT9wrPhlGlpcYotw",
  authDomain: "netflix-clone-c76c5.firebaseapp.com",
  projectId: "netflix-clone-c76c5",
  storageBucket: "netflix-clone-c76c5.appspot.com",
  messagingSenderId: "138175910634",
  appId: "1:138175910634:web:8069d2a77875120a92fd93",
  measurementId: "G-9P6RWT2F4R"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
