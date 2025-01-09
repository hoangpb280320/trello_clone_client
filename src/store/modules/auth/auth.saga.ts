import { call, put, takeLatest } from "redux-saga/effects";
import { handleLogin, loginSuccess } from "./auth.slice";
import { LoginResponse } from "./auth.type";
import { callLogin } from "./auth.service";

function* login(action: ReturnType<typeof handleLogin>) {
  const { code } = action.payload;
  try {
    const data: LoginResponse = yield call(callLogin, code);
    console.log("check12 res", data);
    yield put(loginSuccess(data));
  } catch (error) {
    console.error(error);
  }
}

export default function* authSaga() {
  yield takeLatest("auth/handleLogin", login);
}
