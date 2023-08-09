import { configureStore } from '@reduxjs/toolkit';
import chatSlice from './chat/reducers';
import messageSlice from './messages/reducers';

export const store = configureStore({
  reducer: {
    chats: chatSlice,
    messages: messageSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
