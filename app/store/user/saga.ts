import { Action } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";

import { get } from "@utils/api.util";
import { setError } from "@store/common/actions";
import { setUsers } from "./actions";
import { GET_USERS } from "./actionTypes";

interface IGetUsersAction extends Action {
  payload: {
    page: number;
    limit: number;
    filterCountry?: string;
    onEnd?: () => void;
    onSuccess?: () => void;
    onError?: () => void;
  };
}

// API call functions
const getUsersFromApi = async (
  page: number,
  limit: number,
  filterCountry?: string
) => {
  return get(`/users`, {
    params: {
      page,
      limit,
      ...(filterCountry && { country: filterCountry }),
    },
  });
};

function* getUser(action: IGetUsersAction): Generator<any, void, any> {
  const { page, limit, filterCountry, onEnd, onSuccess, onError } =
    action.payload;
  try {
    const response = yield call(getUsersFromApi, page, limit, filterCountry);

    const append = page > 1;

    yield put(setUsers(response, append));

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
