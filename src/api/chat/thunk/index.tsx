import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ACTION_TYPE_CHAT } from '../actions';
import { IChats } from '../../../interface/api';
import { API_CHATS_GET_URL } from '../../../constants/api';

export const fetchChat = createAsyncThunk(ACTION_TYPE_CHAT, async (_, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        version: '0.0',
      },
    };

    const response = await axios.get<IChats>(API_CHATS_GET_URL, config);

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
