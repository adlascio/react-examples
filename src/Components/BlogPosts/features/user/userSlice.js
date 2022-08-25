import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from './userService';

export const loginWithGoogle = createAsyncThunk(
  'user/loginWithGoogle',
  async () => {
    try {
      const data = await userService.loginWithGoogle();
      return data;
    } catch (e) {
      console.log('error', e);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {
      id: '',
      email: '',
      name: '',
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginWithGoogle.fulfilled, (state, action) => {
      state.info.id = action.payload.user.uid;
      state.info.email = action.payload.user.email;
      state.info.name = action.payload.user.displayName;
    });
  },
});

export default userSlice.reducer;
