import axios from 'axios';
<<<<<<< HEAD
import { collection, getDocs, addDoc } from 'firebase/firestore';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

import { database } from '../../firebase-config';

const postsCollectionRef = collection(database, 'posts');
=======
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

import { db } from '../../firebase-config';

const postsCollectionRef = collection(db, 'posts');
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29

const postsService = {
  get: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  },
  getFromFirebase: async () => {
<<<<<<< HEAD
      const response = await getDocs(postsCollectionRef);
      return response.docs.map((doc) => ({...doc.data(), id:doc.id}));
    },
=======
    const response = await getDocs(postsCollectionRef);
    return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  },
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
  post: async (post) => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      post
    );
    return response.data;
  },
  postToFirebase: async (post) => {
<<<<<<< HEAD
    const response = await addDoc(postCollectionsRef, post);
    return ({ ...post, id:response.id });
    },
=======
    const response = await addDoc(postsCollectionRef, post);
    return { ...post, id: response.id };
  },
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
  delete: async (id) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (response.status === 200) {
      // status OK
      return id;
    }
  },
  deleteFromFirebase: async (id) => {
<<<<<<< HEAD
    const postRef = doc(database, 'posts', id);
    await deleteDoc(postRef);
    return id;
  },
  update: async (post) => {
    console.log('post', post);
=======
    const docRef = doc(db, 'posts', id);
    await deleteDoc(docRef);
    return id;
  },
  update: async (post) => {
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
    console.log('data', response);
    return post;
  },
  updateInFirebase: async (post) => {
<<<<<<< HEAD
    const postRef = doc(database, 'posts', post.id);
    const response = await updateDoc(postRef, {
      body: post.body,
      title: post.title,
    });
    console.log('res', response);
=======
    const docRef = doc(db, 'posts', post.id);
    await updateDoc(docRef, { title: post.title, body: post.body });
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
    return post;
  },
};

export default postsService;
