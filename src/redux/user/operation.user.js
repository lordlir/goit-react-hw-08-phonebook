import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser } from 'api/user.service';
import { token } from 'http';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const tokenValue = getState().auth.token;
      token.set(tokenValue);
      return await getCurrentUser();
    } catch (error) {
      token.unSet();
      return rejectWithValue(error.message);
    }
  }
);
