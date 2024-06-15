import axios from "axios";
import { type AxiosResponse } from "axios";
import { put } from "redux-saga/effects";
import { getCommentsSuccess, getCommentsError } from "../slices/comments.slice";

function* commentsSaga() {
  const apiEndpoint = "https://jsonplaceholder.typicode.com/comments";

  try {
    const res: AxiosResponse = yield axios(apiEndpoint);

    yield put(getCommentsSuccess({ comments: res.data }));
  } catch (err) {
    // notify error
    yield put(getCommentsError());
  }
}

export default commentsSaga;
