import { createSlice } from '@reduxjs/toolkit';
import { addContactOperation } from './operation';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlicer = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [addContactOperation.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const contactsReducer = contactsSlicer.reducer;
