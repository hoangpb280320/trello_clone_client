import { Board } from "../board/type";

export interface BoardsState {
  boards: Board[];
  isLoading: boolean;
  error: {
    message?: string;
  };
}

export interface FetchBoardsSuccess {
  boards: Board[];
}
