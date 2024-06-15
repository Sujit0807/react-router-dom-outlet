import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type TCommentSuccessPayload = {
  comments: TComment[];
};

type TInitialState = {
  comments: TComment[];
  commentsLoading: boolean;
  commentsSuccess: boolean;
  commentsError: boolean;
};

const initialState: TInitialState = {
  comments: [],
  commentsLoading: false,
  commentsSuccess: false,
  commentsError: false,
};

const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState,
  reducers: {
    getComments: (state) => {
      state.commentsLoading = true;
    },
    getCommentsSuccess: (
      state,
      action: PayloadAction<TCommentSuccessPayload>
    ) => {
      state.comments = action.payload.comments;
      state.commentsLoading = false;
      state.commentsSuccess = true;
    },
    getCommentsError: (state) => {
      state.comments = [];
      state.commentsLoading = false;
      state.commentsError = true;
    },
  },
});

export const { getComments, getCommentsSuccess, getCommentsError } =
  commentsSlice.actions;

export default commentsSlice.reducer;
