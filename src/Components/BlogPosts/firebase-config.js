// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2JVQbZm8NUFeV9vKyh99y1z0F5Rd_COo",
  authDomain: "blog-posts-app-1a43a.firebaseapp.com",
  projectId: "blog-posts-app-1a43a",
  storageBucket: "blog-posts-app-1a43a.appspot.com",
  messagingSenderId: "292587803620",
  appId: "1:292587803620:web:e3c4eaf305b4e6d689adf1"
  apiKey: 'AIzaSyBA5ofPxPMp0OahQvf9mPWQ7OIOgrd2SFs',
  authDomain: 'blog-posts-example-17667.firebaseapp.com',
  projectId: 'blog-posts-example-17667',
  storageBucket: 'blog-posts-example-17667.appspot.com',
  messagingSenderId: '493660871459',
  appId: '1:493660871459:web:3555cf4d751870b0e70a96',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore();

export const database = getFirestore();

