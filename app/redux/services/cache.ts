import {
  AuthMethod,
  AuthMethodNullable,
  AuthenticationState,
  OurMagic,
} from "./type";
import { Magic } from "magic-sdk";
//@ts-ignore
import { OAuthExtension } from "@magic-ext/oauth";
export const cache: {
  magic?: OurMagic;
} = {};
export const magicLink = (): OurMagic => {
  if (typeof window !== "undefined") {
    if (!cache.magic)
      cache.magic = new Magic(`${process.env.MAGIC_LINK_API_KEY}`, {
        extensions: [new OAuthExtension()],
      });
  }
  return cache.magic as OurMagic;
};
export const getActiveAuthMethod = (): AuthMethodNullable => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("activeAuthMethod") as AuthMethodNullable;
  }
  return null;
};
export const getJwt = (): AuthenticationState["jwt"] => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("jwt") as AuthenticationState["jwt"];
  }
  return null;
};
