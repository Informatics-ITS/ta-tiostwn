import Button from '@components/buttons/Button';
import Typography from '@components/Typography';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import { List } from 'lucide-react';
import { Download } from 'lucide-react';
import { Upload } from 'lucide-react';
import * as React from 'react';

import Filter from './Filter';
import PaginationControl from './PaginationController';
import TBody from './TBody';
import THead from './THead';
import TOption from './TOptions';

export default function Table({
  className,
  columns,
  data,
  omitSort = false,
  pageSize = 10,
  withFilter = false,
  ...rest
}) {
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageSize,
      },
    },
    defaultColumn: {
      minSize: 0,
      size: 0,
    },
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={clsx('flex flex-col', className)} {...rest}>
      <div
        className={clsx(
          'flex flex-col items-stretch gap-3 sm:flex-row',
          withFilter ? 'sm:justify-between' : 'sm:justify-end'
        )}
      >
        <div className='space-x-2'>
          <Button variant='outline' leftIcon={Upload}>
            Import
          </Button>
          <Button variant='outline' leftIcon={Download}>
            Export
          </Button>
        </div>
        <div className='flex items-center gap-3'>
          <Typography variant='b3' color='secondary' className='font-medium'>
            Menampilkan {table.getState().pagination.pageSize} dari {data.length} data
          </Typography>
          <TOption
            icon={<List size={16} className='text-typo-secondary' />}
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 25].map((page) => (
              <option key={page} value={page}>
                {page} Entries
              </option>
            ))}
          </TOption>
          {withFilter && <Filter table={table} />}
        </div>
      </div>
      <div className='-mx-4 -my-2 mt-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='ring-opacity-5 overflow-hidden md:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-300'>
              <THead table={table} omitSort={omitSort} />
              <TBody table={table} />
            </table>
          </div>
        </div>
      </div>

      <PaginationControl table={table} data={data} className='mt-4' />
    </div>
  );
}
