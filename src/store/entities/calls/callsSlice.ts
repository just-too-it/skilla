import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Call, CallResponse } from 'services/calls/calls.model';
import { getCalls } from 'store/action-creators/calls';

export interface CallsState {
  calls: Call[];
  status: 'loading' | 'success' | 'error';
  error: string;
}

const initialState: CallsState = {
  calls: [],
  status: 'loading',
  error: '',
};

export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCalls.fulfilled, (state, action: PayloadAction<CallResponse>) => {
      state.calls = action.payload.results;
      state.status = 'success';
    });
    builder.addCase(getCalls.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getCalls.rejected, (state, action: PayloadAction<any>) => {
      state.calls = [];
      state.status = 'error';
      state.error = action.payload;
    });
  },
});

export const {} = callsSlice.actions;

export default callsSlice.reducer;
