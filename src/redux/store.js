import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slicer';
import { contactsReducer } from './contacts/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
