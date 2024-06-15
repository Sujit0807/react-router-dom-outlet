import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type TUserSuccessPayload = {
  users: TUser[];
};

type TInitialState = {
  users: TUser[];
  usersLoading: boolean;
  usersSuccess: boolean;
  usersError: boolean;
};

const initialState: TInitialState = {
  users: [],
  usersLoading: false,
  usersSuccess: false,
  usersError: false,
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.usersLoading = true;
    },
    getUsersSuccess: (state, action: PayloadAction<TUserSuccessPayload>) => {
      state.users = action.payload.users;
      state.usersLoading = false;
      state.usersSuccess = true;
    },
    getUsersError: (state) => {
      state.users = [];
      state.usersLoading = false;
      state.usersError = true;
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersError } = usersSlice.actions;

export default usersSlice.reducer;
