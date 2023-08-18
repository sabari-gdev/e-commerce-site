import { createSlice } from "@reduxjs/toolkit";
import { ILoginAuthState } from "../interfaces/loginInterface";

const initialState: ILoginAuthState = {
  isProcessingLogin: false,
  isProcessingForgot: false,
  isProcessingReset: false,
  isProcessingSignup: false,
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    profileImage: "",
    gender: "",
    createdAt: "",
  },
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
export const authReducer = authSlice.reducer;
