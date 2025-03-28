import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Aa4QTJldbE7t1SGn5qaUrJbfEz3zk-Y",
  authDomain: "multiplayer-game-50ba4.firebaseapp.com",
  projectId: "multiplayer-game-50ba4",
  storageBucket: "multiplayer-game-50ba4.appspot.com",
  messagingSenderId: "622678252980",
  appId: "1:622678252980:web:d7b1afa3df33c36c22e6e1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
