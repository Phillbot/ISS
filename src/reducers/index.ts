import { combineReducers } from "redux";
import getFetchData from "./getFetchDataReducer";

const rootReducer = combineReducers({
  getFetchData
});

export default rootReducer;
