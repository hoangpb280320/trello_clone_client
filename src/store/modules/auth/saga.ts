import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { LoginResponse, LoginSuccess } from "./type";
import { handleLogin, handleLoginWithGoogle } from "./service";
import { LOGIN, LOGIN_WITH_GOOGLE, onLoginFail, onUpdateUser } from "./action";
import ls from "localstorage-slim";

function* watchLoginWithGoogle() {
  yield takeLatest(LOGIN_WITH_GOOGLE, loginWithGoogle);
}

function* loginWithGoogle(action: ReturnType<typeof LOGIN_WITH_GOOGLE>) {
  const { code } = action.payload;
  try {
    const data: LoginSuccess = yield call(handleLoginWithGoogle, code);
    yield put(onUpdateUser(data));
  } catch (error: any) {
    let message = getErrorMessage(error);
    yield put(onLoginFail({ message }));
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN, login);
}

function* login(action: ReturnType<typeof LOGIN>) {
  try {
    const data: LoginResponse = yield call(handleLogin, action.payload);
    const { user, token } = data.data;
    ls.set("token", token, { encrypt: true });
    ls.set("user", user);
    yield put(onUpdateUser(data.data.user));
  } catch (error: any) {
    let message = getErrorMessage(error);
    yield put(onLoginFail({ message }));
  }
}

const getErrorMessage = (error: any): string => {
  console.error(error);
  let message: string = "Something went wrong!";
  const responseMessage = error?.response?.data?.message;
  if (responseMessage && responseMessage !== "Internal server error") {
    message = responseMessage;
  }
  return message;
};

export default function* authSaga() {
  yield all([fork(watchLogin), fork(watchLoginWithGoogle)]);
}
