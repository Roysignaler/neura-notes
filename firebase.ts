import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-kQ4NfVGuhCfwWlrYRO-V8NBTM9VB1FM",
    authDomain: "neura-notes.firebaseapp.com",
    projectId: "neura-notes",
    storageBucket: "neura-notes.firebasestorage.app",
    messagingSenderId: "931438039365",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: "G-P0Z2FXM4P1"
  };

  
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);
  let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}


  export {db, analytics};