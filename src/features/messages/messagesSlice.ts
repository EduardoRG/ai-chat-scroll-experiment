import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Message } from './types';

const initialState: Message[] = [];

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      const index = state.findIndex((message) => message.id === action.payload.id);
      if (index === -1) {
        state.push(action.payload);
      } else {
        state[index] = action.payload;
      }
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export const { reducer: messagesReducer } = messagesSlice;
