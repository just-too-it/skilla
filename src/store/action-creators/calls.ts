import { createAsyncThunk } from '@reduxjs/toolkit';
import { CallResponse, RecordResponse } from 'services/calls/calls.model';
import { CallsParams, RecordParams, getCallsAPI, getRecordAPI } from 'services/calls/calls.service';

export const getCalls = createAsyncThunk<CallResponse, CallsParams>('calls/getCalls', async (params, thunkAPI) => {
  try {
    const response = await getCallsAPI(params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const getRecord = createAsyncThunk<RecordResponse, RecordParams>('calls/getRecord', async (params, thunkAPI) => {
  try {
    const response = await getRecordAPI(params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
