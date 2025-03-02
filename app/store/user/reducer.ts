import { AnyAction } from "redux";

import { SET_USERS } from "./actionTypes";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload.append
          ? [...state.users, ...action.payload.users]
          : action.payload.users,
      };

    default:
      return state;
  }
};

export default userReducer;
