import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import authReducer from "../features/auth/redux/auth.slice";
import userReducer from "../features/users/redux/user.slice";
import singleGroupReducer from "../features/chat-window/group/redux/get-single-group.slice";
import onMessageRecieveReducer from "../features/chat-window/redux/onMessageRecieve";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  singleGroup: singleGroupReducer,
  onMessageRecieve: onMessageRecieveReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
