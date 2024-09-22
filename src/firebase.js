import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4LkbPI3IrzlQlwd1GTfe_qUy9Vd-JG_Y",
  authDomain: "teja-reddy-e134f.firebaseapp.com",
  projectId: "teja-reddy-e134f",
  storageBucket: "teja-reddy-e134f.appspot.com",
  messagingSenderId: "949534186702",
  appId: "1:949534186702:web:8533308649e87f74b4049f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()