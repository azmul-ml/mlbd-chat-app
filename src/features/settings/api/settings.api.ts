import { apiAuth } from "../../../api/api";
import { AxiosResponse } from "axios";
import cookie from "react-cookies";
import { AUTH_ACCESS_TOKEN } from "../../auth/constants/auth.keys";

import { SettingsEndpointsEnum } from "../constants/settings.endpoints";

// eslint-disable-next-line import/prefer-default-export
export const lockGroupApi = (): Promise<AxiosResponse> =>
  apiAuth.get(`${SettingsEndpointsEnum.LOCK_GROUP}`, {
    headers: {
      "auth-token": `${cookie.load(AUTH_ACCESS_TOKEN)}`,
    },
  });

export const unlockGroupApi = (): Promise<AxiosResponse> =>
  apiAuth.get(`${SettingsEndpointsEnum.UNLOCK_GROUP}`, {
    headers: {
      "auth-token": `${cookie.load(AUTH_ACCESS_TOKEN)}`,
    },
  });
