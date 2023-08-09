import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ACTION_TYPE_MESSAGES } from '../actions';
import { IMessages } from '../../../interface/api';
import { API_MESSAGES_GET_URL } from '../../../constants/api';

export const fetchMessages = createAsyncThunk(ACTION_TYPE_MESSAGES, async (chatID: string, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        version: '0.0',
      },
    };

    const response = await axios.get<IMessages>(API_MESSAGES_GET_URL(chatID), config);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      rejectWithValue(error.message);
    } else {
      rejectWithValue(error);
    }
    throw new Error('An error occurred while fetching user profile.');
  }
});
