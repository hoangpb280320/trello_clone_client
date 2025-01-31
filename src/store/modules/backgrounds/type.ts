export interface Background {
  id: string;
  title: string;
  image: string;
}

export interface UploadBackground {
  file: File;
  url: string;
}

export interface BackgroundsState {
  backgrounds: Background[];
  uploadBackgrounds: UploadBackground[];
  currentBackground: Background | UploadBackground | null;
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
