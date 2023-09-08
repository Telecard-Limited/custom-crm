import {
  AppUser,
  AuthenticationState,
  VerifyAuthResponse,
} from "@/app/redux/services/type";
import {
  cache,
  getActiveAuthMethod,
  getJwt,
  magicLink,
} from "@/app/redux/services/cache";
import Router from "next/navigation";
import { appAxios } from "@/app/redux/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthState } from "./auth";
import { useRouter } from "next/router";
export const refreshAuth = createAsyncThunk<
  void,
  {
    user: AppUser;
  },
  {}
>("/auth/refresh", async ({ user }, { dispatch, getState }) => {
  const {
    auth: { initialChecked },
  } = getState() as { auth: AuthenticationState };
  if (!initialChecked) {
    await Promise.all([
      dispatch(refreshAuthJwt()),
      dispatch(refreshAuthMagic()),
    ]);
  }
});
const router = useRouter();
export const refreshAuthJwt = createAsyncThunk<AppUser | null, void, {}>(
  "auth/refresh/jwt",
  async (_, { dispatch }) => {
    if (getJwt()) {
      const activeAuthMethod = getActiveAuthMethod();
      const { data } = await appAxios
        .patch<VerifyAuthResponse>(`/api/auth/login`)
        .catch(() => ({
          data: { confirmation: false } as VerifyAuthResponse,
        }));

      if (data.confirmation) {
        dispatch(
          setAuthState({
            user: data.user,
            jwt: data.jwt,
            activeAuthMethod,
          })
        );
        if (data.jwt) sessionStorage.setItem("jwt", data.jwt);
        return data.user;
      } else {
        sessionStorage.removeItem("jwt");
        sessionStorage.removeItem("activeAuthMethod");
        router?.push("/registration");
        dispatch(
          setAuthState({
            user: null,
            jwt: null,
            activeAuthMethod: null,
          })
        );
      }
    }

    return null;
  }
);

export const refreshAuthMagic = createAsyncThunk<
  AuthenticationState["magic"],
  void,
  {}
>("auth/refresh/magic", async (_, { getState, dispatch }) => {
  const magic = magicLink();
  const { auth: state } = getState() as { auth: AuthenticationState };
  const data: AuthenticationState["magic"] = { ...state.magic };
  const isLoggedIn = await magic.user.isLoggedIn();
  data.isConnected = isLoggedIn;
  if (isLoggedIn) {
    data.userMetadata = await magic.user.getMetadata();
  }
  dispatch(
    setAuthState({
      magic: data,
    })
  );
  return data;
});
