import { apiAuth } from "../../../api/api";
import { AxiosResponse } from "axios";
import { UserEndpointsEnum } from "../constants/user.endpoints";
import cookie from "react-cookies";
import { AUTH_ACCESS_TOKEN } from "../../auth/constants/auth.keys";

// eslint-disable-next-line import/prefer-default-export
const getUsersApi = (): Promise<AxiosResponse> =>
  apiAuth.get(`${UserEndpointsEnum.GET_ALL_USER}`, {
    headers: {
      "auth-token": `${cookie.load(AUTH_ACCESS_TOKEN)}`,
    },
  });
export const getSingleUserApi = (userID: string): Promise<AxiosResponse> =>
  apiAuth.get(`${userID}`, {
    headers: {
      "auth-token": `${cookie.load(AUTH_ACCESS_TOKEN)}`,
    },
  });

export default getUsersApi;
