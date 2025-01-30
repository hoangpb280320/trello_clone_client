import { createReducer } from "@reduxjs/toolkit";
import { BackgroundsState } from "./type";
import {
  FETCH_BACKGROUNDS,
  FETCH_BACKGROUNDS_FAILURE,
  FETCH_BACKGROUNDS_SUCCESS,
} from "./action";

const initialState: BackgroundsState = {
  backgrounds: [],
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

const backgroundsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(FETCH_BACKGROUNDS, onHandleFetchBackgrounds)
    .addCase(FETCH_BACKGROUNDS_SUCCESS, onHandleFetchBackgroundsSuccess)
    .addCase(FETCH_BACKGROUNDS_FAILURE, onHandleFetchBackgroundsFailure);
});

export default backgroundsReducer;
