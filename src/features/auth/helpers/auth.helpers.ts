import { isAfter } from "date-fns";
import cookie from "react-cookies";

import { AUTH_ACCESS_TOKEN } from "../constants/auth.keys";
import { CookieTokenDef } from "../types/auth.types";

/**
 * Loads token from session cookie
 */
export const getTokens = () => {
  const value: CookieTokenDef = cookie.load(AUTH_ACCESS_TOKEN);
  console.log(value);

  const current = new Date();
  const expiry = new Date(value?.expiresAt);

  return {
    accessToken: value && value,
  };
};
