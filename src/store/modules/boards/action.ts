import { createAction } from "@reduxjs/toolkit";
import { FetchBoardsSuccess } from "./type";

export const FETCH_BOARDS = createAction("FETCH_BOARDS");
export const onFetchBoards = () => FETCH_BOARDS();

export const FETCH_BOARDS_SUCCESS = createAction<FetchBoardsSuccess>(
  "FETCH_BOARDS_SUCCESS"
);
export const onFetchBoardsSuccess = (boards: FetchBoardsSuccess["boards"]) =>
  FETCH_BOARDS_SUCCESS({ boards });

export const FETCH_BOARDS_FAIL = createAction<string>("FETCH_BOARDS_FAIL");
export const onFetchBoardsFail = (message: string) =>
  FETCH_BOARDS_FAIL(message);
