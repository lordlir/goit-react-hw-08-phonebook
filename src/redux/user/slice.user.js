import { createSlice } from '@reduxjs/toolkit';
import { userInitSt } from './initSt.user';
import { getUser } from './operation.user';

const userSlice = createSlice({
  name: 'auth',
  initialState: userInitSt,
  extraReducers: {
    [getUser.pending](state) {
      state.isLoading = true;
    },
    [getUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.name = payload.name;
      state.email = payload.email;
    },
    [getUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export const userReducer = userSlice.reducer;
