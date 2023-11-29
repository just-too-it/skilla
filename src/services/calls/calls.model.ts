export interface Call {
  id: number;
  in_out: number;
  date: string;
  person_avatar: string;
  person_surname: string;
  from_number: string;
  to_number: string;
  source: string;
  time: number;
  estimation: string; // в ответе сервера нет оценки. уточнить.
}

export interface CallResponse {
  total_rows: number;
  results: Call[];
}

export interface RecordResponse {
  record: any
}
