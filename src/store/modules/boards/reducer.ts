import { createReducer } from "@reduxjs/toolkit";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_FAIL,
  FETCH_BOARDS_SUCCESS,
} from "./action";
import { BoardsState } from "./type";

const initialState: BoardsState = {
  boards: [],
  isLoading: false,
  error: {},
};

const onHanldeFetchBoards = (state: BoardsState) => {
  state.isLoading = true;
};

const onHandleFetchBoardsSuccess = (
  state: BoardsState,
  action: ReturnType<typeof FETCH_BOARDS_SUCCESS>
) => {
  state.isLoading = false;
  state.boards = action.payload.boards;
};

const onFetchBoardsFail = (
  state: BoardsState,
  action: ReturnType<typeof FETCH_BOARDS_FAIL>
) => {
  state.isLoading = false;
  state.error.message = action.payload;
};

const boardsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(FETCH_BOARDS, onHanldeFetchBoards)
    .addCase(FETCH_BOARDS_SUCCESS, onHandleFetchBoardsSuccess)
    .addCase(FETCH_BOARDS_FAIL, onFetchBoardsFail);
});

export default boardsReducer;
