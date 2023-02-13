import { createSlice } from '@reduxjs/toolkit';

import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from './operations.contacts';

const contactsInitState = {
  items: [],
  isLoading: false,
  error: null,
};

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items.push(payload);
    },
    [addContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContacts.pending](state) {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    [deleteContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const ContactsReducer = ContactsSlice.reducer;
