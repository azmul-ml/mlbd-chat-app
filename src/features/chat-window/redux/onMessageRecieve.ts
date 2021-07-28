import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const onMessageRecieveSlice = createSlice({
  name: "on-message-recieve",
  initialState: null,
  reducers: {
    init: (state, action: PayloadAction<any>) => action.payload,
  },
});

export default onMessageRecieveSlice.reducer;
