// Import the functions you need from the SDKs you need
<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

=======
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyA2JVQbZm8NUFeV9vKyh99y1z0F5Rd_COo",
  authDomain: "blog-posts-app-1a43a.firebaseapp.com",
  projectId: "blog-posts-app-1a43a",
  storageBucket: "blog-posts-app-1a43a.appspot.com",
  messagingSenderId: "292587803620",
  appId: "1:292587803620:web:e3c4eaf305b4e6d689adf1"
=======
  apiKey: 'AIzaSyCuZe1oECsAuV9rlIvVba8gzRx12WnnZ-A',
  authDomain: 'blog-posts-example-9cef4.firebaseapp.com',
  projectId: 'blog-posts-example-9cef4',
  storageBucket: 'blog-posts-example-9cef4.appspot.com',
  messagingSenderId: '793946168585',
  appId: '1:793946168585:web:ce346320fe65e84b0e47d8',
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

<<<<<<< HEAD
export const database = getFirestore();

export const auth = getAuth(app);

=======
export const db = getFirestore();

export const auth = getAuth(app);
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
