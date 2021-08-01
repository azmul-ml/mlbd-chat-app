import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cookie from "react-cookies";

import { loginApi, registerApi } from "../api/auth.api";
import { AUTH_ACCESS_TOKEN } from "../constants/auth.keys";
import { LoginCredentials, RegistrationCredentials } from "../types/auth.types";

const initialState = {
  username: "",
  email: "",
  isFething: false,
  isSuccess: false,
  isError: false,
  errormessage: "",
  data: {
    profile_image_link: null,
    name: "",
    email: "",
    user_id: "",
  },
};

export const loginUser = createAsyncThunk(
  "auth/login",
  (credentials: LoginCredentials, { dispatch }) =>
    loginApi(credentials).then(
      (res) => {
        cookie.save(AUTH_ACCESS_TOKEN, res.data.token, {});
        return res.data;
      },
      (err) => err.message
    )
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled.toString()]: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const registerUser = createAsyncThunk(
  "auth/register",
  (credentials: RegistrationCredentials, { dispatch }) =>
    registerApi(credentials).then(
      (res) => {
        return res.data;
      },
      (err) => err.message
    )
);

export default authSlice.reducer;
