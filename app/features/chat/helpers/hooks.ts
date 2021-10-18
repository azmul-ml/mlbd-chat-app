import { useEffect, useState } from "react";
import {
  IGetSingleGroup,
  IMessageRecieve,
  ISignleGroup,
} from "../group/types/group-chat.types";
import cookie from "react-cookies";
import { AUTH_ACCESS_TOKEN } from "../../auth/constants/auth.keys";

import { getGroupMessages } from "../group/redux/get-group.massages.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

export const useGetMessages = () => {
  const dispatch = useAppDispatch();
  const singleGroup: any = useAppSelector(
    (state: RootState) => state.singleGroup
  );
  const [messageList, setMessageList] = useState<IMessageRecieve[]>([]);

  const token = cookie.load(AUTH_ACCESS_TOKEN);

  const data: IGetSingleGroup = {
    group_id: singleGroup.id,
    token: token,
  };
  useEffect(() => {
    dispatch(getGroupMessages(data)).then(
      (res: any) => res.payload && setMessageList([...res.payload].reverse())
    );
  }, []);
  return messageList;
};

export const useSyncRealtipeMessage = (messageList: IMessageRecieve[]) => {
  const instantText: IMessageRecieve | null = useAppSelector(
    (state: RootState) => state.onMessageRecieve
  );
  const [syncMessages, setSyncMessages] =
    useState<IMessageRecieve[]>(messageList);

  useEffect(() => {
    if (messageList) {
      if (instantText) {
        setSyncMessages([instantText, ...messageList].reverse());
        messageList.push(instantText);
      }
    }
  }, [instantText]);
  return syncMessages;
};
