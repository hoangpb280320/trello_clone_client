import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/auth/reducer";
import themeReducer from "./modules/theme/reducer";
import boardsReducer from "./modules/boards/reducer";
import backgroundsReducer from "./modules/backgrounds/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  boards: boardsReducer,
  backgrounds: backgroundsReducer,
});

export default rootReducer;
