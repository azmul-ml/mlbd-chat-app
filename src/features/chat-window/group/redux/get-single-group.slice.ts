import { getSingleGroupApi } from "../api/group-chat.api";
import { ICreateGroupChat } from "../types/groput-chat.types";
import cookie from "react-cookies";
import { AUTH_ACCESS_TOKEN } from "../../../auth/constants/auth.keys";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGroupResponse } from "../types/groput-chat.types";

const initialState = {
  singleGroup: {},
};
export const singleGroupSlice = createSlice({
  name: "single-group",
  initialState,
  reducers: {
    addSingleGroup: (state, action: any) => {
      return { ...action.payload };
    },
  },
});

export const getSingleGroup = createAsyncThunk(
  "get/group",
  async (data: any) => {
    const res = await getSingleGroupApi(data);
    console.log(res);
    return res.data;
  }
  // (err) => err.message
);

export default singleGroupSlice.reducer;
