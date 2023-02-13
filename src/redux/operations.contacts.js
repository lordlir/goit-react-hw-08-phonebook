import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactServ,
  deleteContactsServ,
  getContacts,
} from 'api/conacts.service';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      console.log(data);
      return data;
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
