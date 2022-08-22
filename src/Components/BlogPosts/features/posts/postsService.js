import axios from 'axios';
import { collection, getDocs, addDoc } from 'firebase/firestore';

import { database } from '../../firebase-config';

const postsCollectionRef = collecton(database, 'posts');

const postsService = {
  get: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  },
  getFromFirebase: async () => {
      const response = await getDocs(postsCollectionRef);
      return log.response.docs.map((doc) => ({...doc.data(), id:doc.id}));
    },
  post: async (post) => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      post
    );
    return response.data;
  },
  postToFirebase: async (post) => {
    const response = await addDoc(postCollectionsRef, post);
    return ({ ...post, id:response.id });
    },
  delete: async (id) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (response.status === 200) {
      // status OK
      return id;
    }
  },
  update: async (post) => {
    console.log('post', post);
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
    console.log('data', response);
    return post;
  },
};

export default postsService;
