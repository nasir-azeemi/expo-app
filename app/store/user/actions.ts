import { SortOrder, VoidFuncType } from "../../typings/common.types";
import { IUser } from "../../typings/user.types";
import { GET_USERS, SET_USERS } from "./actionTypes";

export const getUsers = (
  page: number,
  limit: number,
  sortOrder: SortOrder,
  filterCountry?: string,
  onEnd?: VoidFuncType,
  onSuccess?: VoidFuncType,
  onError?: VoidFuncType
) => {
  return {
    type: GET_USERS,
    payload: {
      page,
      limit,
      sortOrder,
      filterCountry,
      onEnd,
      onSuccess,
      onError,
    },
  };
};

export const setUsers = (
  users: IUser[],
  append: boolean,
  onEnd?: VoidFuncType,
  onSuccess?: VoidFuncType,
  onError?: VoidFuncType
) => {
  return {
    type: SET_USERS,
    payload: { users, append, onEnd, onSuccess, onError },
  };
};
