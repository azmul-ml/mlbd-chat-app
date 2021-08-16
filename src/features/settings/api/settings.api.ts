import { api } from "../../../api/api";
import { AxiosResponse } from "axios";
// import cookie from "react-cookies";
// import { AUTH_ACCESS_TOKEN } from "../../auth/constants/auth.keys";

import { SettingsEndpointsEnum } from "../constants/settings.endpoints";

// eslint-disable-next-line import/prefer-default-export

export const lockGroupApi = (data: any): Promise<AxiosResponse> =>
  api.post(`${SettingsEndpointsEnum.LOCK_GROUP}`, data);

export const unlockGroupApi = (data: any): Promise<AxiosResponse> =>
  api.post(`${SettingsEndpointsEnum.UNLOCK_GROUP}`, data);

