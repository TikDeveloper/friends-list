import { ReactNode } from 'react';
import { TableColDef } from './types';

type TableRowsProps<T, K extends keyof T> = {
  data: T;
  columns: Array<TableColDef<T, K>>;
  actionsSlot?: ReactNode;
  dynamicSlots?: {
    [P in K]?: ReactNode;
  };
};

export const TableRow = <T, K extends keyof T>({
  data,
  columns,
  actionsSlot,
  dynamicSlots,
}: TableRowsProps<T, K>): JSX.Element => {
  return (
    <tr>
      {columns.map((column, idx) => {
        const dynamicSlot = dynamicSlots && dynamicSlots[column.accessor];

        return (
          <td key={`cell-${idx}`}>
            {dynamicSlot ? dynamicSlot : (data[column.accessor] as ReactNode)}
          </td>
        );
      })}
      {!!actionsSlot && <td>{actionsSlot}</td>}
    </tr>
  );
};
