import { IUser } from "@typings/user.types";
import { GET_USERS, SET_USERS } from "./actionTypes";
import { VoidFuncType } from "@typings/common.types";

export const getUsers = (
  onEnd?: VoidFuncType,
  onSuccess?: VoidFuncType,
  onError?: VoidFuncType
) => {
  return {
    type: GET_USERS,
    payload: {
      onEnd,
      onSuccess,
      onError,
    },
  };
};

export const setUsers = (
  users: IUser[],
  onEnd?: VoidFuncType,
  onSuccess?: VoidFuncType,
  onError?: VoidFuncType
) => {
  return {
    type: SET_USERS,
    payload: { users, onEnd, onSuccess, onError },
  };
};
