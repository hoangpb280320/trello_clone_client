import { createAction } from "@reduxjs/toolkit";
import {
  LoginFail,
  LoginWithGooglePayload,
  LoginSuccess,
  LoginPayload,
} from "./type";

export const LOGIN = createAction<LoginPayload>("LOGIN");
export const onLogin = (payload: LoginPayload) => LOGIN(payload);

export const LOGIN_WITH_GOOGLE =
  createAction<LoginWithGooglePayload>("LOGIN_WITH_GOOGLE");
export const onLoginWithGoogle = (payload: LoginWithGooglePayload) =>
  LOGIN_WITH_GOOGLE(payload);

export const UPDATE_USER = createAction<LoginSuccess>("UPDATE_USER");
export const onUpdateUser = (payload: LoginSuccess) => UPDATE_USER(payload);

export const LOGIN_FAIL = createAction<LoginFail>("LOGIN_FAIL");
export const onLoginFail = (payload: LoginFail) => LOGIN_FAIL(payload);

export const LOGOUT = createAction("LOGOUT");
export const onLogout = () => LOGOUT();
