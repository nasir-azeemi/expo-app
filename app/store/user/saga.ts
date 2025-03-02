import { Action } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";

import { get } from "@utils/api.util";
import { setError } from "@store/common/actions";
import { setUsers } from "./actions";
import { GET_USERS } from "./actionTypes";

interface IGetUsersAction extends Action {
  payload: {
    onEnd?: () => void;
    onSuccess?: () => void;
    onError?: () => void;
  };
}

// API call functions
const getUsersFromApi = async () => {
  return get(`/users`);
};

function* getUser(action: IGetUsersAction): Generator<any, void, any> {
  const { onEnd, onSuccess, onError } = action.payload;
  try {
    const response = yield call(getUsersFromApi);

    yield put(setUsers(response));

    onSuccess?.();
  } catch (error: any) {
    yield put(setError(error?.message));
    onError?.();
  }

  onEnd?.();
}

// Watcher saga
function* userSaga() {
  yield takeLatest(GET_USERS, getUser);
}

export default userSaga;
