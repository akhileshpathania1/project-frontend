import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrGLPHryv0rylXEGo4E4WNqypaeLqVcE4",
  authDomain: "foodorderingapplication-482c7.firebaseapp.com",
  projectId: "foodorderingapplication-482c7",
  storageBucket: "foodorderingapplication-482c7.appspot.com",
  messagingSenderId: "624747899316",
  appId: "1:624747899316:web:9764c58630b94dd372eae1",
  measurementId: "G-G2FRBT5YTP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
