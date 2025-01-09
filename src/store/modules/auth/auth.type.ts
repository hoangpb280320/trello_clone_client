export interface AuthState {
  user: {
    id?: string;
    userName?: string;
    email?: string;
    avatar?: string;
  };
  isLoading: boolean;
  error: {
    message?: string;
  };
}

export interface LoginPayload {
  code: string;
}

export interface LoginSuccess {
  id: string;
  userName: string;
  email: string;
  avatar?: string;
}

export interface LoginFail {
  message: string;
}

export interface LoginResponse {
  id: string;
  userName: string;
  email: string;
  avatar?: string;
}
