import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/auth/reducer";
import themeReducer from "./modules/theme/reducer";
import boardsReducer from "./modules/boards/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  boards: boardsReducer,
});

export default rootReducer;
