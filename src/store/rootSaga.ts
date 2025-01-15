import { all, fork } from "redux-saga/effects";
import authSaga from "./modules/auth/saga";

export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
