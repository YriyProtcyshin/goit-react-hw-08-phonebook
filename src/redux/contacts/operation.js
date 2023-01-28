import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk(
  'contacts/addContact',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
