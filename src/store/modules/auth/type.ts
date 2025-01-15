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

export interface LoginWithGooglePayload {
  code: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
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
  data: {
    token: string;
    user: LoginSuccess;
  };
}
