import { createSlice } from '@reduxjs/toolkit';

const filterInitState = {
  search: '',
};

export const FilterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    setFilter(state, { payload }) {
      state.search = payload;
    },
  },
});

export const { setFilter } = FilterSlice.actions;
export const FiltersReducer = FilterSlice.reducer;
