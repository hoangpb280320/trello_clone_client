import { RootState } from "../../store";

export const selectBackgrounds = (state: RootState) =>
  state.backgrounds.backgrounds;
export const selectUploadBackgrounds = (state: RootState) =>
  state.backgrounds.uploadBackgrounds;
export const selectCurrentBackground = (state: RootState) =>
  state.backgrounds.currentBackground;
