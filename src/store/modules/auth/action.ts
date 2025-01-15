import { createAction } from "@reduxjs/toolkit";
import {
  LoginFail,
  LoginWithGooglePayload,
  LoginSuccess,
  LoginPayload,
} from "./type";

export const LOGIN = createAction<LoginPayload>("LOGIN");
export const LOGIN_WITH_GOOGLE =
  createAction<LoginWithGooglePayload>("LOGIN_WITH_GOOGLE");
export const LOGIN_SUCCESS = createAction<LoginSuccess>("LOGIN_SUCCESS");
export const LOGIN_FAIL = createAction<LoginFail>("LOGIN_FAIL");

export const onLogin = (payload: LoginPayload) => LOGIN(payload);
export const onLoginWithGoogle = (payload: LoginWithGooglePayload) =>
  LOGIN_WITH_GOOGLE(payload);
export const onLoginSuccess = (payload: LoginSuccess) => LOGIN_SUCCESS(payload);
export const onLoginFail = (payload: LoginFail) => LOGIN_FAIL(payload);
