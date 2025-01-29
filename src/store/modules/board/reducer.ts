import { createReducer } from "@reduxjs/toolkit";
import { CHANGE_THEME } from "./action";

export type Theme = "light" | "dark";

export interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: "dark",
};

const onHandleChangeTheme = (
  state: ThemeState,
  action: ReturnType<typeof CHANGE_THEME>
) => {
  state.theme = action.payload;
};

const themeReducer = createReducer(initialState, (builder) => {
  builder.addCase(CHANGE_THEME, onHandleChangeTheme);
});

export default themeReducer;
