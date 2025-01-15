import HttpClient from "../../../configs/axios";
import { LoginPayload, LoginResponse, RegisterPayload } from "./type";

const http = new HttpClient();

export const handleRegister = async (payload: RegisterPayload) => {
  const response = await http.post<LoginResponse>()("auth/register", payload);
  return response.data.data.user;
};

export const handleLogin = async (payload: LoginPayload) => {
  const response = await http.post<LoginResponse>()("auth/login", payload);
  return response.data.data.user;
};

export const handleLoginWithGoogle = async (code: string) => {
  const response = await http.post<LoginResponse>()("auth/google/login", {
    code,
  });
  return response.data.data.user;
};
