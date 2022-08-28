import { Row, Store } from '@phobase/client-core';
import { Column } from '../siteVersion';

export const getStore = (columns: Column[], row: Row, name: string): Store | undefined => {
  const column = columns.find(column => column.name === name);

  if (column) {
    const cell = row.cells.find(cell => cell.columnId === column.viewColumnId);

    return cell?.store;
  }

  return undefined;
};
