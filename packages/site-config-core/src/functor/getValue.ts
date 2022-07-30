import { Row, Value } from '@phobase/client-core';
import { Column } from '../siteConfig';

export const getValue = <V = Value>(columns: Column[], row: Row, name: string): V | undefined => {
  const column = columns.find(column => column.name === name);

  if (column) {
    const cell = row.cells.find(cell => cell.columnId === column.columnId);

    return cell?.value as unknown as V;
  }

  return undefined;
};
