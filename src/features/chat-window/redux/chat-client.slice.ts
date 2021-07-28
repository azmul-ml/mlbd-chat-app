import { createSlice } from "@reduxjs/toolkit";
import { ChatClient } from "@mlbd/chat-client";
import {
  tokenProvider,
  pusherOptions,
  handleSubscriptions,
} from "../helpers/chat.helpers";

let initialClient: any = null;

export const ClientChat = () => (dispatch: any) => {
  initialClient = new ChatClient({
    chatApiEndpoint: "http://localhost:3000",
    tokenProvider,
    pusherOptions,
  });

  initialClient.connect().then(() => {
    handleSubscriptions(initialClient, dispatch);
  });
};
