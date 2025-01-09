import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, LoginFail, LoginPayload, LoginSuccess } from "./auth.type";

const initialState: AuthState = {
  user: {},
  isLoading: false,
  error: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogin(state, _action: PayloadAction<LoginPayload>) {
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<LoginSuccess>) {
      state.user = action.payload;
      state.isLoading = false;
    },
    loginFail(state, action: PayloadAction<LoginFail>) {
      state.error.message = action.payload.message;
    },
  },
});

export const { handleLogin, loginSuccess, loginFail } = authSlice.actions;

export default authSlice.reducer;
