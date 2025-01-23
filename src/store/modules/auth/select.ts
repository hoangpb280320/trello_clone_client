import { RootState } from "../../store";

export const selectIsAuth = (state: RootState) => !!state.auth.user.id;
export const selectUser = (state: RootState) => state.auth.user;
export const selectLoading = (state: RootState) => state.auth.isLoading;
export const selectError = (state: RootState) => state.auth.error.message;
