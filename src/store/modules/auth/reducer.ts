import { createReducer } from "@reduxjs/toolkit";
import { AuthState } from "./type";
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "./action";

const initialState: AuthState = {
  user: {},
  isLoading: false,
  error: {},
};

const onHandleLogin = (state: AuthState, _action: ReturnType<typeof LOGIN>) => {
  state.isLoading = true;
};

const onHandleLoginSuccess = (
  state: AuthState,
  action: ReturnType<typeof LOGIN_SUCCESS>
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

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOGIN, onHandleLogin)
    .addCase(LOGIN_SUCCESS, onHandleLoginSuccess)
    .addCase(LOGIN_FAIL, onHandleLoginFail);
});

export default authReducer;
