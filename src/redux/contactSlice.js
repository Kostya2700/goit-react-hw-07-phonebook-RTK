import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const tasksInitialState = {
  array: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.array.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContacts(state, action) {
      const arrayIndex = state.array.findIndex(
        contacts => contacts.id === action.payload
      );
      state.array.splice(arrayIndex, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;