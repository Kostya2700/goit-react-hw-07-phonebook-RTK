import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    filter(state, action) {
      console.log('state', state);
      console.log('state', state.value);
      state.value = action.payload;
    },
  },
});
// console.log('filterSlice', filterSlice);
export const { filter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
