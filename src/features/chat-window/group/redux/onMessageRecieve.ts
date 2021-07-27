import cookie from "react-cookies";
import { AUTH_ACCESS_TOKEN } from "../../../auth/constants/auth.keys";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const onMessageRecieveSlice = createSlice({
  name: "on-message-recieve",
  initialState: null,
  reducers: {
    init: (state, action: PayloadAction<any>) => action.payload,
  },
});

export default onMessageRecieveSlice.reducer;
