import Typography from '@components/Typography';
import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';

export default function TBody({ className, isLoading = false, table, ...rest }) {
  const rows = table.getRowModel().rows;

  return (
    <tbody
      className={clsx('divide-typo-divider divide-y divide-gray-300 bg-white', className)}
      {...rest}
    >
      {isLoading && (
        <tr className='animate-pulse bg-gray-50'>
          <td
            colSpan={table.getAllColumns().length}
            className='px-6 py-4 text-center text-sm whitespace-nowrap text-gray-700'
          >
            <span>Memuat data...</span>
          </td>
        </tr>
      )}
      {rows.length === 0 && !isLoading ? (
        <tr className='bg-gray-50'>
          <td
            colSpan={table.getAllColumns().length}
            className='px-6 py-4 text-center text-sm whitespace-nowrap text-gray-700'
          >
            <span>Data tidak ditemukan</span>
          </td>
        </tr>
      ) : (
        rows.map((row, index) => (
          <tr key={row.id} className={clsx(index % 2 === 0 ? 'bg-white' : 'bg-white')}>
            {row.getVisibleCells().map((cell) => (
              <Typography
                key={cell.id}
                as='td'
                variant='b3'
                color='secondary'
                className={clsx(['whitespace-nowrap', 'truncate', 'py-4 pr-3 pl-[34px]'])}
                title={cell.getValue()}
                style={{
                  width: cell.column.getSize() !== 0 ? cell.column.getSize() : undefined,
                  maxWidth: cell.column.getSize() !== 0 ? cell.column.getSize() : undefined,
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Typography>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
}
