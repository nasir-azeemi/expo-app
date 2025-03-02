import { CLEAR, SET_ERROR, SET_SUCCESS } from "./actionTypes";

export const setSuccess = (msg: string) => ({
  type: SET_SUCCESS,
  payload: msg,
});

export const setError = (msg: string) => ({
  type: SET_ERROR,
  payload: msg,
});

export const clear = () => ({
  type: CLEAR,
});
