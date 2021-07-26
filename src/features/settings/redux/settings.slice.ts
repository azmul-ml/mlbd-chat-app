import { lockGroupApi } from "../api/settings.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const lockGroup = createAsyncThunk(
  "lock/group",
  async (data: any) => {
    const res = await lockGroupApi(data);
    console.log("res", res);
    return res.data;
  }
  // (err) => err.message
);
