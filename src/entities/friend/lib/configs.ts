import { TableColDef } from '@shared/ui';
import { Friend } from '../model/types';

export const tableColumns = [
  {
    header: 'Name',
    accessor: 'name',
    sortable: true,
  },
  {
    header: 'Email',
    accessor: 'email',
    sortable: true,
  },
  {
    header: 'Phone',
    accessor: 'phone',
    sortable: true,
  },
  {
    header: 'Twitter',
    accessor: 'twitter',
  },
] as TableColDef<Friend, keyof Friend>[];
