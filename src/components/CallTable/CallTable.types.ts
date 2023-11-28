import { Call } from 'services/calls/calls.model';

export type TableColumn = {
  id: number;
  name: string;
};

export type callTableType = {
  columns: TableColumn[];
  items: Call[];
};
