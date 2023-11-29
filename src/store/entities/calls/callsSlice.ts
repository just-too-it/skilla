import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Call, CallResponse, RecordResponse } from 'services/calls/calls.model';
import { getCalls, getRecord } from 'store/action-creators/calls';

export interface CallsState {
  data: Call[];
  status: 'loading' | 'success' | 'error';
  error: string;
  currentRecord: any;

  params: {
    callType: string;
    dateStart: string | null;
    dateEnd: string | null;
  };
}

const initialState: CallsState = {
  data: [],
  status: 'loading',
  error: '',
  currentRecord: null,

  params: {
    callType: 'all',
    dateStart: null,
    dateEnd: null,
  },
};

export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    setParamsCallType(state, action: PayloadAction<string>) {
      state.params.callType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCalls.fulfilled, (state, action: PayloadAction<CallResponse>) => {
      state.data = action.payload.results;
      state.status = 'success';
    });
    builder.addCase(getCalls.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getCalls.rejected, (state, action: PayloadAction<any>) => {
      state.data = [];
      state.status = 'error';
      state.error = action.payload;
    });

    builder.addCase(getRecord.fulfilled, (state, action: PayloadAction<RecordResponse>) => {
      state.currentRecord = action.payload;
      state.status = 'success';
    });
    builder.addCase(getRecord.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getRecord.rejected, (state, action: PayloadAction<any>) => {
      state.currentRecord = null;
      state.status = 'error';
      state.error = action.payload;
    });
  },
});

export const { setParamsCallType } = callsSlice.actions;

export default callsSlice.reducer;
