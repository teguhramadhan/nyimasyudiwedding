// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAa5c-ouQa7nkGKL2sAY8Hni7LAvcvVpiw",
  authDomain: "nyimasyudiwedding.firebaseapp.com",
  projectId: "nyimasyudiwedding",
  storageBucket: "nyimasyudiwedding.firebasestorage.app",
  messagingSenderId: "702939152516",
  appId: "1:702939152516:web:d5c3cd1b1522be2c0042d1",
  measurementId: "G-3B4Q3J6EES",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
