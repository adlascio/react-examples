import React, { useRef, useEffect } from "react";
import { auth } from '../BlogPosts/firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from 'react';
import { signup } from "./app/user/userSlice";


export default function Signup() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        await signup(email, password);
        createUserWithEmailAndPassword(auth, email, password);
        dispatch
    }
    return (
        <div>
          <h2>Signup</h2>
            <form>
              <div>
                <label htmlFor='emailInput' ref={emailInputRef}>Email</label>
                <input type="email" />
              </div>
              <label htmlFor='passwordInput' ref={passwordInputRef}>Password</label>
              <input type="password" />
              <div>
                <button>Sign up</button>
              </div>
            </form>
        </div>
    );
}