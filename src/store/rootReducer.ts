import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
