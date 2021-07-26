import { api } from "../../../../api/api";
import { AxiosResponse } from "axios";
import { ChatEndpointsEnum } from "../constants/group-chat.endpoints";
import {
  ICreateGroupChat,
  IGetSingleGroup,
  ISentMessage,
} from "../types/groput-chat.types";

// eslint-disable-next-line import/prefer-default-export
const createGroupChat = (data: ICreateGroupChat): Promise<AxiosResponse> =>
  api.post(`${ChatEndpointsEnum.CREATE_GROUP}`, data);

export const getMyGroupList = (data: any): Promise<AxiosResponse> =>
  api.post(`${ChatEndpointsEnum.GET_MY_GROUP_LIST}`, data);

export default createGroupChat;

export const getSingleGroupApi = (
  data: IGetSingleGroup
): Promise<AxiosResponse> =>
  api.post(`${ChatEndpointsEnum.GET_SINGLE_GROUP}`, data);

export const sendGroupMessageApi = (
  data: ISentMessage
): Promise<AxiosResponse> =>
  api.post(`${ChatEndpointsEnum.SEND_MESSAGE}`, data);
