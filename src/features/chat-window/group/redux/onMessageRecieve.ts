import { createSlice } from "@reduxjs/toolkit";

export const onMessageRecieveSlice = createSlice({
  name: "on-message-recieve",
  initialState: null,
  reducers: {
    init: (state, action: any) => {
      action.payload.onMessageRecieved((res: any) => console.log(res));
    },
  },
});
