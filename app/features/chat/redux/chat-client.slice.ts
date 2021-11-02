import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ChatClient } from "@mlbd/chat-client";

import { tokenProvider, pusherOptions } from "../helpers/chat.helpers";
import { store } from "../../../redux/store";
import { onMessageRecieveSlice } from "../group/redux/onMessageRecieve";

let initialClient: any = null;

export const chatClient = createSlice({
  name: "chat/client",
  initialState: initialClient,
  reducers: {},
});

const handleSubscriptions = (client: any) => {
  const { init } = onMessageRecieveSlice.actions;
  // dispatch(init(client));
  store.dispatch(init(client));
  console.log(store);
  // dispatch.onMessageRead.init(client);
  // dispatch.onAddedToGroup.init(client);
  // dispatch.onGroupUpdated.init(client);
  // dispatch.onGroupDeleted.init(client);
  // dispatch.onMessageUpdated.init(client);
  // dispatch.onMessageDeleted.init(client);
  // dispatch.onGroupMemberAdded.init(client);
  // dispatch.onSavedMessageAdded.init(client);
  // dispatch.onGroupMemberRemoved.init(client);
  // dispatch.onPinnedMessageAdded.init(client);
  // dispatch.onSavedMessageRemoved.init(client);
  // dispatch.onPinnedMessageRemoved.init(client);
};
export const exClientChatTh = createAsyncThunk(
  "chat/client",
  (credentials: any, dispatch: any) => {
    initialClient = new ChatClient({
      chatApiEndpoint: "http://localhost:3001",
      tokenProvider,
      pusherOptions,
    });

    initialClient.connect().then(() => {
      handleSubscriptions(initialClient);
    });
  }
);

export const exClientChat = ()  => {
  // const dispatch = useAppDispatch();

  initialClient = new ChatClient({
    chatApiEndpoint: "http://localhost:3001",
    tokenProvider,
    pusherOptions, 
  });

  // initialClient.on;/

  initialClient.connect().then(() => {
    handleSubscriptions(initialClient);
  });
};
