import { combineReducers } from "redux";

import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  User: userReducer,
});

export default rootReducer;
