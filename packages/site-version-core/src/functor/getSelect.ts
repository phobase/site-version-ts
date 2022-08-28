import { Row, Select } from '@phobase/client-core';
import { Column } from '../siteVersion';

export const getSelect = (columns: Column[], row: Row, name: string): Select | undefined => {
  const column = columns.find(column => column.name === name);

  if (column) {
    const cell = row.cells.find(cell => cell.columnId === column.viewColumnId);

    return cell?.select;
  }

  return undefined;
};
