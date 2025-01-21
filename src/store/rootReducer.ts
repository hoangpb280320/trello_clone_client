import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/auth/reducer";
import themeReducer from "./modules/theme/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});

export default rootReducer;
