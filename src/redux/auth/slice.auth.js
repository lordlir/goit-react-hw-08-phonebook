import { getUser } from 'redux/user/operation.user';
import { loginUser, logOutUser, registratedUser } from './oper.auth';

const { createSlice } = require('@reduxjs/toolkit');
const { default: initStAuth } = require('./initSt.auth');

const authSlice = createSlice({
  name: 'auth',
  initialState: initStAuth,
  extraReducers: {
    [registratedUser.pending](state) {
      state.isLoading = true;
    },
    [registratedUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isAuth = true;
      state.token = payload.token;
    },
    [registratedUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending](state) {
      state.isLoading = true;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isAuth = true;

      state.token = payload.token;
    },
    [loginUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [getUser.fulfilled](state) {
      state.isAuth = true;
    },
    [getUser.rejected](state) {
      state.isAuth = false;

      state.token = null;
    },
    [logOutUser.pending](state) {
      state.isLoading = true;
    },
    [logOutUser.fulfilled](state) {
      state.isLoading = false;
      state.isAuth = false;

      state.token = null;
    },
    [logOutUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export const authReducer = authSlice.reducer;
