import { ColumnType } from '@phobase/client-core';

export type Column = {
  name: string;
  type: ColumnType;
  columnId: string;
};
