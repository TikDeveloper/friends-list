import { ReactNode, useCallback, useMemo, useState } from 'react';
import { Table as RBTable, TableProps as RBTableProps } from 'react-bootstrap';
import { TableColDef } from './types';

type TableProps<T, K extends keyof T> = {
  columns: Array<TableColDef<T, K>>;
  data: Array<T>;
  tableProps?: RBTableProps;
  hideHeader?: boolean;
  children?: ({
    data,
    columns,
  }: {
    data: Array<T>;
    columns: Array<TableColDef<T, K>>;
  }) => ReactNode;
};

export const Table = <T, K extends keyof T>({
  columns,
  data,
  tableProps,
  hideHeader = false,
  children,
}: TableProps<T, K>) => {
  const [sortConfig, setSortConfig] = useState<{
    key: K | null;
    direction: 'asc' | 'desc';
  }>({
    key: null,
    direction: 'asc',
  });

  const sortedData = useMemo(() => {
    const sortedArray = [...data];

    if (sortConfig.key) {
      sortedArray.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof T];
        const bValue = b[sortConfig.key as keyof T];

        if (aValue === bValue) return 0;

        if (sortConfig.direction === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }

    return sortedArray;
  }, [data, sortConfig]);

  const onSort = useCallback(
    (key: K) => {
      let direction: 'asc' | 'desc' = 'asc';
      if (sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
      }

      setSortConfig({ key, direction });
    },
    [sortConfig.direction, sortConfig.key]
  );

  return (
    <RBTable {...tableProps}>
      {!hideHeader && (
        <thead>
          <tr>
            {columns?.map((col, idx) => (
              <th
                key={idx}
                onClick={() => col.sortable && onSort(col.accessor)}
                style={{ cursor: col.sortable ? 'pointer' : 'default' }}
              >
                {col.header}
                {col.sortable && (
                  <span style={{ marginLeft: '4px' }}>
                    {sortConfig.key === col.accessor &&
                      (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </span>
                )}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
      )}
      <tbody>{!!children && children({ data: sortedData, columns })}</tbody>
    </RBTable>
  );
};
