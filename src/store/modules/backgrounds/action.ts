import { createAction } from "@reduxjs/toolkit";
import { Background, BackgroundsResponse, UploadBackground } from "./type";

export const FETCH_BACKGROUNDS = createAction("FETCH_BACKGROUNDS");
export const onFetchBackgrounds = () => FETCH_BACKGROUNDS();

export const FETCH_BACKGROUNDS_SUCCESS = createAction<BackgroundsResponse>(
  "FETCH_BACKGROUNDS_SUCCESS"
);
export const onFetchBackgroundsSuccess = (payload: BackgroundsResponse) =>
  FETCH_BACKGROUNDS_SUCCESS(payload);

export const FETCH_BACKGROUNDS_FAILURE = createAction<string>(
  "FETCH_BACKGROUNDS_FAILURE"
);
export const onFetchBackgroundsFailure = (payload: string) =>
  FETCH_BACKGROUNDS_FAILURE(payload);

export const UPLOAD_BACKGROUND =
  createAction<UploadBackground>("UPLOAD_BACKGROUND");
export const onUploadBackground = (payload: UploadBackground) =>
  UPLOAD_BACKGROUND(payload);

export const SET_CURRENT_BACKGROUND = createAction<
  Background | UploadBackground
>("SET_CURRENT_BACKGROUND");
export const onSetCurrentBackground = (
  payload: Background | UploadBackground
) => SET_CURRENT_BACKGROUND(payload);
