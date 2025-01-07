import { takeLatest } from "redux-saga/effects";
import { handleLogin } from "./auth.slice";
import HttpClient from "../../../configs/axios";

const http = new HttpClient();

function* login(action: ReturnType<typeof handleLogin>) {
  const { code } = action.payload;
  try {
    const res = http.post()("auth/google/login", { code });
    console.log(res);
  } catch (error) {}
}

export default function* authSaga() {
  yield takeLatest(handleLogin.type, login);
}
