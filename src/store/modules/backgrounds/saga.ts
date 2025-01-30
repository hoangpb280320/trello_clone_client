import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_BACKGROUNDS,
  onFetchBackgroundsFailure,
  onFetchBackgroundsSuccess,
} from "./action";
import { handleFetchBackgrounds } from "./service";
import { getErrorMessage } from "../../../utils";
import { Background } from "./type";

export default function* backgroundsSaga() {
  yield takeLatest(FETCH_BACKGROUNDS, watchFetchBackgrounds);
}

function* watchFetchBackgrounds() {
  try {
    const backgrounds: Background[] = yield call(handleFetchBackgrounds);
    yield put(onFetchBackgroundsSuccess({ backgrounds }));
  } catch (error) {
    let message = getErrorMessage(error);
    yield put(onFetchBackgroundsFailure(message));
  }
}
