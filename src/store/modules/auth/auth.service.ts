import HttpClient from "../../../configs/axios";
import { LoginResponse } from "./auth.type";

const http = new HttpClient();

export const callLogin = async (code: string) => {
  const response = await http.post<LoginResponse>()("auth/google/login", {
    code,
  });
  return response.data;
};
