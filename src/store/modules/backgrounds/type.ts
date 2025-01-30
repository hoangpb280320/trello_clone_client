export interface Background {
  id: string;
  title: string;
  image: string;
}

export interface BackgroundsState {
  backgrounds: Background[];
  loading: boolean;
  error: string | null;
}

export interface BackgroundsResponse {
  backgrounds: Background[];
}

export interface FetchBackgroundsResponse {
  data: {
    backgrounds: Background[];
  };
}
