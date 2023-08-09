import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchMessages } from '../thunk';
import { IMessages } from '../../../interface/api';

interface IInitialState {
  messages: IMessages | null;
  messagesStatus: null | 'loading' | 'success' | 'error';
}

const initialState: IInitialState = {
  messages: null,
  messagesStatus: null,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.messagesStatus = 'loading';
    });
    builder.addCase(fetchMessages.fulfilled, (state, action: PayloadAction<IMessages>) => {
      console.log(action.payload, 'test');
      state.messages = action.payload;
      state.messagesStatus = 'success';
    });

    builder.addCase(fetchMessages.rejected, (state) => {
      state.messagesStatus = 'error';
      state.messages = null;
    });
  },
});

export default messageSlice.reducer;
