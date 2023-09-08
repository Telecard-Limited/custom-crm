import { User as UserType } from "@prisma/client";
import { InstanceWithExtensions, SDKBase } from "@magic-sdk/provider";
import { MagicUserMetadata } from "magic-sdk";

//@ts-ignore
import { OAuthExtension } from "@magic-ext/oauth";
export type AuthMethod = "magic";
export type AuthMethodNullable = "magic" | null;
export type AppUser = UserType;
export type OurMagic = InstanceWithExtensions<SDKBase, OAuthExtension[]>;
export interface AuthenticationState {
  jwt: string | null;
  magic: {
    userMetadata: MagicUserMetadata | null;
    loading: boolean;
    isConnected: boolean;
    jwt: string | null;
  };
  user: AppUser | null;
  activeAuthMethod: AuthMethodNullable;
  initialChecked: boolean;
  isLoginModalOpen: boolean;
  isSignupModalOpen: Boolean;
}
export type VerifyAuthResponse =
  | {
      confirmation: false;
    }
  | {
      confirmation: true;
      user: AppUser | null;
      jwt: string | null;
    };
export interface LoginUserResponse {
  data: {
    jwt: string;
    user: AppUser;
  };
}

export type ProxyAdapter = {
  type: "magic";
  adapter: OurMagic["jwt"];
};

export type ProxyAdapterNullable = null | ProxyAdapter;
