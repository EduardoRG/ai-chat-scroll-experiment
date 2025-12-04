import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_CONFIG } from './constants';
import type { Config } from './types';

const configSlice = createSlice({
  name: 'config',
  initialState: DEFAULT_CONFIG,
  reducers: {
    setConfig: (_, action: PayloadAction<Config>) => action.payload,
  },
});

export const { setConfig } = configSlice.actions;
export const { reducer: configReducer } = configSlice;
