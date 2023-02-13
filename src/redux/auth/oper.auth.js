import { createAsyncThunk } from '@reduxjs/toolkit';
import { logUser, outUser, regiUser } from 'api/user.service';
import { token } from 'http';

export const registratedUser = createAsyncThunk(
  'auth/registration',
  async (search, { rejectWithValue }) => {
    try {
      const data = await regiUser(search);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (search, { rejectWithValue }) => {
    try {
      const data = await logUser(search);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await outUser();
      token.unSet();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/*
import {
  addContactServ,
  deleteContactsServ,
  getContacts,
} from 'api/conacts.service';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (search, { rejectWithValue }) => {
    try {
      return await getContacts(search);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (body, { rejectWithValue }) => {
    try {
      return await addContactServ(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContactsServ(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
*/
