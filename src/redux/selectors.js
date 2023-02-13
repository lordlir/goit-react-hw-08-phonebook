import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.search;
export const getFilterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, search) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
  }
);
