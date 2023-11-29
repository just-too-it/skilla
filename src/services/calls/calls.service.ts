import axios from 'axios';

export interface CallsParams {
  date_start?: string | null;
  date_end?: string | null;
  in_out?: number | null;
}

export interface RecordParams {
  record?: string;
  partnership_id?: string;
}

export const getCallsAPI = async (params: CallsParams) => {
  const dateStartStr = params.date_start ? `&date_start=${params.date_start}` : '';
  const dateEndStr = params.date_end ? `&date_end=${params.date_end}` : '';
  const inOutStr = params.in_out !== null ? `&in_out=${params.in_out}` : '';

  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL as string}/getList?${dateStartStr}${dateEndStr}${inOutStr}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TEST_TOKEN}`,
      },
    }
  );

  return response;
};

export const getRecordAPI = async (params: RecordParams) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL as string}/getRecord`,
    {},
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TEST_TOKEN}`,
        'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
        'Content-Transfer-Encoding': 'binary',
        'Content-Disposition': 'filename=record.mp3',
      },
    }
  );

  return response;
};
