import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ChatClient } from "@mlbd/chat-client";
import { useAppDispatch } from "../../../app/hooks";

import { tokenProvider, pusherOptions } from "../helpers/chat.helpers";
import { store } from "../../../app/store";
import { onMessageRecieveSlice } from "../group/redux/onMessageRecieve";

let initialClient: any = null;

export const chatClient = createSlice({
  name: "chat/client",
  initialState: initialClient,
  reducers: {
    returnChatClient(state, payload) {
      return state;
    },
    initChat: (state) => {
      // if (initialClient) {
      //   return state;
      // }
      console.log("dddddddddddd", state);
      initialClient = new ChatClient({
        chatApiEndpoint: "http://localhost:3000/",
        tokenProvider,
        pusherOptions,
      });

      initialClient.connect().then(() => {
        console.log(initialClient);
      });
    },
  },
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
  () => (dispatch: any) => {
    initialClient = new ChatClient({
      chatApiEndpoint: "http://localhost:3000",
      tokenProvider,
      pusherOptions,
    });
    console.log(initialClient, tokenProvider);
    // initialClient.on;/

    initialClient.connect().then(() => {
      handleSubscriptions(initialClient);
    });
  }
);

// export const loginThunk = createAsyncThunk(
//   "auth/login",
//   (credentials: LoginCredentials, { dispatch }) =>
//     loginApi(credentials).then(
//       (res) => {
//         sessionHelper.seed(res.data, null);
//         dispatch(getMeThunk());
//         return res.data;
//       },
//       (err) => err.message
//     )
// );

export const exClientChat = () => {
  // const dispatch = useAppDispatch();
  console.log("dddddddddddd");
  initialClient = new ChatClient({
    chatApiEndpoint: "http://localhost:3000",
    tokenProvider,
    pusherOptions,
  });
  console.log(initialClient, tokenProvider);
  // initialClient.on;/

  initialClient.connect().then(() => {
    handleSubscriptions(initialClient);
  });
};
