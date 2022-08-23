import { createAsyncThunk, userSlcie } from "@reduxjs/toolkit/dist/createAsyncThunk";

async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}