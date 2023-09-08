import { AuthenticationState } from "@/app/redux/services/type";
import { createSlice } from "@reduxjs/toolkit";
import { getActiveAuthMethod } from "@/app/redux/services/cache";

const initialState = () =>
  ({
    jwt: null,
    magic: {
      userMetadata: null,
      loading: false,
      isConnected: false,
    },
    initialChecked: false,
    isLoginModalOpen: false,

    activeAuthMethod: getActiveAuthMethod(),
    user: null,
  } as AuthenticationState);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoginModalOpen(state, { payload }: { payload: boolean }) {
      state.isLoginModalOpen = payload;
    },
    setState(state, { payload }: { payload: Partial<AuthenticationState> }) {
      Object.entries(payload).forEach(([key, val]: [any, any]) => {
        if (val && key == "user") {
          if (val?.name) {
            val.name = val.name == val.name || "";
            val.email = val.email || "";
          } else {
            val.username = "";
            val.email = "";
          }
        }

        // @ts-ignore
        state[key] = val;
      });
    },
  },
});

export const {
  setState: setAuthState,
  setIsLoginModalOpen,
} = authSlice.actions;
