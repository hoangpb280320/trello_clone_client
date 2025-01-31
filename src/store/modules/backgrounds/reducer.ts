import { createReducer } from "@reduxjs/toolkit";
import { BackgroundsState } from "./type";
import {
  FETCH_BACKGROUNDS,
  FETCH_BACKGROUNDS_FAILURE,
  FETCH_BACKGROUNDS_SUCCESS,
  SET_CURRENT_BACKGROUND,
  UPLOAD_BACKGROUND,
} from "./action";

const initialState: BackgroundsState = {
  backgrounds: [],
  uploadBackgrounds: [],
  currentBackground: null,
  loading: false,
  error: null,
};

const onHandleFetchBackgrounds = (state: BackgroundsState) => {
  state.loading = true;
};

const onHandleFetchBackgroundsSuccess = (
  state: BackgroundsState,
  action: ReturnType<typeof FETCH_BACKGROUNDS_SUCCESS>
) => {
  state.loading = false;
  state.backgrounds = action.payload.backgrounds;
};

const onHandleFetchBackgroundsFailure = (
  state: BackgroundsState,
  action: ReturnType<typeof FETCH_BACKGROUNDS_FAILURE>
) => {
  state.loading = false;
  state.error = action.payload;
};

const onHandleUploadBackground = (
  state: BackgroundsState,
  action: ReturnType<typeof UPLOAD_BACKGROUND>
) => {
  state.uploadBackgrounds = [action.payload].concat(state.uploadBackgrounds);
};

const onHandleSetCurrentBackground = (
  state: BackgroundsState,
  action: ReturnType<typeof SET_CURRENT_BACKGROUND>
) => {
  state.currentBackground = action.payload;
};

const backgroundsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(FETCH_BACKGROUNDS, onHandleFetchBackgrounds)
    .addCase(FETCH_BACKGROUNDS_SUCCESS, onHandleFetchBackgroundsSuccess)
    .addCase(FETCH_BACKGROUNDS_FAILURE, onHandleFetchBackgroundsFailure)
    .addCase(UPLOAD_BACKGROUND, onHandleUploadBackground)
    .addCase(SET_CURRENT_BACKGROUND, onHandleSetCurrentBackground);
});

export default backgroundsReducer;
