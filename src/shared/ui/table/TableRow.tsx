import { ReactNode } from 'react';
import { TableColDef } from './types';

type TableRowsProps<T, K extends keyof T> = {
  data: T;
  columns: Array<TableColDef<T, K>>;
  actionsSlot?: ReactNode;
};

export const TableRow = <T, K extends keyof T>({
  data,
  columns,
  actionsSlot,
}: TableRowsProps<T, K>): JSX.Element => {
  return (
    <tr>
      {columns.map((column, colIdx) => {
        return (
          <td key={`cell-${colIdx}`}>{data[column.accessor] as ReactNode}</td>
        );
      })}
      {!!actionsSlot && <td>{actionsSlot}</td>}
    </tr>
  );
};
