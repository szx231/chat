import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchChat } from '../thunk';
import { IChats } from '../../../interface/api';

interface IinitialState {
  chats: IChats | null;
  chatStatus: null | 'loading' | 'success' | 'error';
}

const initialState: IinitialState = {
  chats: null,
  chatStatus: null,
};

export const chatSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChat.pending, (state) => {
      state.chatStatus = 'loading';
    });
    builder.addCase(fetchChat.fulfilled, (state, action: PayloadAction<IChats>) => {
      state.chats = action.payload;
      state.chatStatus = 'success';
    });

    builder.addCase(fetchChat.rejected, (state) => {
      state.chatStatus = 'error';
      state.chats = null;
    });
  },
});

export default chatSlice.reducer;
