import React from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from './features/user/userSlice';

export default function BlogPosts() {
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    dispatch(loginWithGoogle());
  };
  return (
    <div>
      <h1>BlogPosts</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button>Sign out</button>
    </div>
  );
}
