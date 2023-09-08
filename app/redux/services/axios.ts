import axios from "axios";
import { getJwt } from "./cache";

export const appAxios = axios.create({});
appAxios.interceptors.request.use((req) => {
  let jwt = getJwt();
  if (jwt) req.headers.Authorization = `Bearer ${jwt}`;
  return req;
});
