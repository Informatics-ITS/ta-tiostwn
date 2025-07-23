import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

export default function THead({ className, omitSort, table, ...rest }) {
  return (
    <thead className={clsx('border-b border-gray-200', className)} {...rest}>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              scope='col'
              className={clsx(
                'group py-3 pr-3 text-left font-[#1A3650] text-base font-semibold capitalize',
                !omitSort && header.column.getCanSort() ? 'pl-4' : 'pl-[30px]'
              )}
            >
              {header.isPlaceholder ? null : (
                <div
                  className={clsx(
                    'relative flex items-center gap-2 py-1',
                    !omitSort && header.column.getCanSort() ? 'cursor-pointer select-none' : ''
                  )}
                  onClick={omitSort ? () => null : header.column.getToggleSortingHandler()}
                >
                  {!omitSort && header.column.getCanSort() && !header.column.getIsSorted() ? (
                    <ChevronDown className='fill-primary-600 group-hover:fill-typo-icons w-3 rotate-180' />
                  ) : (
                    ({
                      asc: <ChevronDown className='fill-primary-600 w-3 rotate-180' />,
                      desc: <ChevronDown className='fill-primary-600 w-3' />,
                    }[header.column.getIsSorted()] ?? null)
                  )}
                  <p>{flexRender(header.column.columnDef.header, header.getContext())}</p>
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
