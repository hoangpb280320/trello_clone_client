import { all, fork } from "redux-saga/effects";
import authSaga from "./modules/auth/saga";
import backgroundsSaga from "./modules/backgrounds/saga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(backgroundsSaga)]);
}
