type Background = 1 | 2 | 3 | 4;

export interface Board {
  id: number;
  title: string;
  deadline?: string;
  background: Background;
  createdAt: string;
  updatedAt: string;
}

export interface BoardState {
  board: Board | null;
}
