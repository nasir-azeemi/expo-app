import { AnyAction } from "redux";

import { CLEAR, SET_ERROR, SET_SUCCESS } from "./actionTypes";

const initialState = {
  success: "",
  error: "",
};

const commonReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: "",
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        success: "",
      };

    case CLEAR:
      return initialState;

    default:
      return state;
  }
};

export default commonReducer;
