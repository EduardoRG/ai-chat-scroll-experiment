import { configureStore } from '@reduxjs/toolkit';
import { configReducer } from './features/config/configSlice';
import { messagesReducer } from './features/messages/messagesSlice';

export const store = configureStore({
  reducer: {
    config: configReducer,
    messages: messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
