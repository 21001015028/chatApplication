import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKFvxDl6vEgVhsiKksJUlPKRvBYvRbkgA",
  authDomain: "chats-7b74c.firebaseapp.com",
  projectId: "chats-7b74c",
  storageBucket: "chats-7b74c.appspot.com",
  messagingSenderId: "214544689315",
  appId: "1:214544689315:web:eb240abf38f71fae71f716"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


