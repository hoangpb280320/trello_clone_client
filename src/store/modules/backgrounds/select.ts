import { RootState } from "../../store";

export const selectBackgrounds = (state: RootState) =>
  state.backgrounds.backgrounds;
