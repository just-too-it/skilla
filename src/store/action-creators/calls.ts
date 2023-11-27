import { createAsyncThunk } from '@reduxjs/toolkit';
import { CallResponse } from 'services/calls/calls.model';
import { CallsParams, getCallsAPI } from 'services/calls/calls.service';

export const getCalls = createAsyncThunk<CallResponse, CallsParams>('calls/getCalls', async (params, thunkAPI) => {
    try {
      const response = await getCallsAPI(params);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  });