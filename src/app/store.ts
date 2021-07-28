import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../features/auth/redux/auth.slice";
import userReducer from "../features/users/redux/user.slice";
import singleGroupReducer from "../features/chat-window/group/redux/get-single-group.slice";
import onMessageRecieveReducer from "../features/chat-window/redux/onMessageRecieve";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    singleGroup: singleGroupReducer,
    onMessageRecieve: onMessageRecieveReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
