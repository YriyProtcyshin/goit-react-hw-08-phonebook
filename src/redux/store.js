import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slicer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: '',
  },
});
