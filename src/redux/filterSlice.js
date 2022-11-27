import { createSlice } from '@reduxjs/toolkit';
const initialValue = { value: '' };
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialValue,
  reducers: {
    filter(state, action) {
      state.value = action.payload;
    },
  },
});
// console.log('filterSlice', filterSlice);
export const { filter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
