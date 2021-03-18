import { combineReducers } from "redux";
import dogs from "./dogReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  dogs,
  apiCallsInProgress,
});

export default rootReducer;
