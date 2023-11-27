import axios from 'axios';

export interface CallsParams {
  date_start?: Date | string;
  date_end?: Date | string;
  in_out?: number;
}

export const getCallsAPI = async (params: CallsParams) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL as string}/getList`,
    {
      params: {
        date_start: params.date_start,
        date_end: params.date_end,
        in_out: params.in_out,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TEST_TOKEN}`,
      },
    }
  );

  return response;
};
