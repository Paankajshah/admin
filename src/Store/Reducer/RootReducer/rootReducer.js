import { combineReducers } from "redux";
import { authReducer } from "../AuthReducer/authReducer";
import { errorReducer } from "../ErrorReducer/errorReducer";


export const rootReducer = combineReducers({
  authReducer,
  errorReducer,
});
