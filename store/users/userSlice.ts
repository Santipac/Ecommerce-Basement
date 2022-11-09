import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  status: string;
}

const initialState: IUser = {
  uid: null,
  displayName: null,
  email: null,
  photoURL: null,
  status: 'not-authenticated',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    checkingUser: state => {
      state.status = 'checking';
    },
    loginUser: (state, { payload }: PayloadAction<IUser>) => {
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.status = payload.status;
    },
    logoutUser: state => {
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.status = 'not-authenticated';
    },
  },
});

export const { loginUser, logoutUser, checkingUser } = userSlice.actions;

export default userSlice.reducer;
