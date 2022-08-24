import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  login,
  loginWithGoogle,
  loginWithGithub,
} from './features/user/userSlice';

export default function SignIn() {
  const signInEmailRef = useRef();
  const signInPasswordRef = useRef();
  const dispatch = useDispatch();
  const signIn = (e) => {
    e.preventDefault();
    const email = signInEmailRef.current.value;
    const password = signInPasswordRef.current.value;
    const user = { email, password };
    dispatch(login(user));
  };
  return (
    <>
      <form onSubmit={signIn}>
        <div>
          <label htmlFor=''>Email</label>
          <input type='email' ref={signInEmailRef} />
        </div>
        <div>
          <label htmlFor=''>Password</label>
          <input type='password' ref={signInPasswordRef} />
        </div>
        <button>Sign In!</button>
      </form>
      <button onClick={() => dispatch(loginWithGoogle())}>
        Login with Google
      </button>
      <button onClick={() => dispatch(loginWithGithub())}>
        Login with Github
      </button>
    </>
  );
}
