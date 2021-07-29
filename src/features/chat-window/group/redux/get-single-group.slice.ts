import { getSingleGroupApi } from "../api/group-chat.api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


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
