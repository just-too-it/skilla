export interface Call {
  id: number;
  in_out: number;
  date: string;
  person_avatar: string;
  from_number: string;
  source: string;
  time: number;
}

export interface CallResponse {
  total_rows: number;
  results: Call[];
}
