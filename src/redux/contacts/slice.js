import { createSlice } from '@reduxjs/toolkit';
import { addContactOperation, getAllContacts } from './operation';

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
    [getAllContacts.fulfilled](state, action) {
      state.contacts = action.payload
      state.isLoading = false;
      state.error = null;
    }
  },
});

export const contactsReducer = contactsSlicer.reducer;
