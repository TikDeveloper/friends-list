export type TableColDef<T, K extends keyof T> = {
  accessor: K;
  header: string;
  sortable?: boolean;
};
