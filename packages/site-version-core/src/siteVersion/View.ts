import { Column } from './Column';

export type View = {
  name: string;
  viewId: string;
  columns: Column[];
};
