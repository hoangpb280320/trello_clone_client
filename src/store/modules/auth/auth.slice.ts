import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginPayload } from "./auth.type";

interface State {
  data: string;
}

const initialState: State = {
  data: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogin(_state, _action: PayloadAction<LoginPayload>) {
      console.log("Login");
    },
    loginSuccess(_state, action) {
      console.log("Login success", action.payload);
    },
    loginFail(_state, action) {
      console.log("Login fail", action.payload);
    },
  },
});

export const { handleLogin, loginSuccess, loginFail } = authSlice.actions;

export default authSlice.reducer;
