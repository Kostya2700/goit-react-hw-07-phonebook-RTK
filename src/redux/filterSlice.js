import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    filter(state, action) {
      state.value = action.payload;
    },
  },
});
export const { filter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
//selectors
export const stateFilter = state => state.filter.value;
