export interface Board {
  id: number;
  title: string;
  deadline?: string;
  backgroundId: string;
  createdAt: string;
  updatedAt: string;
}

export interface BoardState {
  board: Board | null;
}
