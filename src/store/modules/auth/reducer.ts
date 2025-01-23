import { createReducer } from "@reduxjs/toolkit";
import { AuthState } from "./type";
import { LOGIN, LOGIN_FAIL, LOGOUT, UPDATE_USER } from "./action";

const initialState: AuthState = {
  user: {},
  isLoading: false,
  error: {},
};

const onHandleLogin = (state: AuthState, _action: ReturnType<typeof LOGIN>) => {
  state.isLoading = true;
};

const onHandleUpdateUser = (
  state: AuthState,
  action: ReturnType<typeof UPDATE_USER>
) => {
  state.user = action.payload;
  state.isLoading = false;
};

const onHandleLoginFail = (
  state: AuthState,
  action: ReturnType<typeof LOGIN_FAIL>
) => {
  state.error.message = action.payload.message;
};

const onHandleLogout = (state: AuthState) => {
  state.user = {};
  state.isLoading = false;
  state.error = {};
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOGIN, onHandleLogin)
    .addCase(UPDATE_USER, onHandleUpdateUser)
    .addCase(LOGIN_FAIL, onHandleLoginFail)
    .addCase(LOGOUT, onHandleLogout);
});

export default authReducer;
