import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../BlogPosts/firebase-config';

export const signup = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
    })
  }
});

export default userSlice.reducer;