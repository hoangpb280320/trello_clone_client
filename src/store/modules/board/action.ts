import { createAction } from "@reduxjs/toolkit";
import { Theme } from "./reducer";

export const CHANGE_THEME = createAction<Theme>("CHANGE_THEME");

export const onChangeTheme = (theme: Theme) => CHANGE_THEME(theme);
