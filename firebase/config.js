import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuaYxqwDFkrmlMLGjE1ICtrtUz87W5llc",
  authDomain: "thefuture-b0f19.firebaseapp.com",
  projectId: "thefuture-b0f19",
  storageBucket: "thefuture-b0f19.appspot.com",
  messagingSenderId: "438481447287",
  appId: "1:438481447287:web:bddda906eebe27f7899972"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp(); 

// init services
  const db = getFirestore(app)
  const auth = getAuth(app)
  const storage = getStorage(app);

  
  export { db, storage, auth }