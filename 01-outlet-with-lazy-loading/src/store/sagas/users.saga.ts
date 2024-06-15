import axios from "axios";
import { type AxiosResponse } from "axios";
import { put } from "redux-saga/effects";
import { getUsersSuccess, getUsersError } from "../slices/users.slice";

function* usersSaga() {
  const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

  try {
    const res: AxiosResponse = yield axios(apiEndpoint);
    const data = res.data;

    yield put(getUsersSuccess({ users: data }));
  } catch (err) {
    // notify error msg here
    yield put(getUsersError());
  }
}

export default usersSaga;
