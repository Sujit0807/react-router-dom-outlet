import { takeEvery, takeLatest } from "redux-saga/effects";

// Reducers Import
import { getUsers } from "../slices/users.slice";
import { getComments } from "../slices/comments.slice";

// Saga Imports
import usersSaga from "./users.saga";
import commentsSaga from "./comments.saga";

export default function* rootSaga() {
  yield takeLatest(getUsers.type, usersSaga);
  yield takeEvery(getComments.type, commentsSaga);
}
