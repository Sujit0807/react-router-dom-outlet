import { combineReducers } from "redux";
import usersSlice from "./users.slice";
import commentsSlice from "./comments.slice";

const rootReducer = combineReducers({
  users: usersSlice,
  comments: commentsSlice,
});

export default rootReducer;
