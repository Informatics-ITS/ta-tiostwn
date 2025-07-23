import Button from '@components/buttons/Button';
import clsx from 'clsx';
import { ArrowRightIcon } from 'lucide-react';
import { ArrowLeftIcon } from 'lucide-react';
import { buildPaginationControl } from 'src/lib/pagination';

/**
 *
 * @see https://javascript.plainenglish.io/create-a-pagination-in-a-react-way-df5c6fe1e0c7
 */
export default function PaginationControl({ className, data, table, ...rest }) {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const pageCount = table.getPageCount();
  const paginationControl = buildPaginationControl(currentPage, pageCount);

  const handlePageControlClick = (page) => {
    if (page !== '...') {
      table.setPageIndex(page - 1);
    }
  };

  return (
    <div className={clsx('flex items-center justify-between gap-x-2', className)} {...rest}>
      <Button
        variant='outline'
        leftIcon={ArrowLeftIcon}
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
      >
        Sebelumnya
      </Button>
      <div className='space-x-2'>
        {paginationControl.map((page, index) => (
          <Button
            key={index}
            variant='ghost'
            className={clsx(
              currentPage === page && 'bg-blue-500 text-white',
              'h-[40px] w-[40px] text-gray-500'
            )}
            onClick={() => handlePageControlClick(page)}
          >
            {page}
          </Button>
        ))}
      </div>
      <Button
        variant='outline'
        rightIcon={ArrowRightIcon}
        disabled={!table.getCanNextPage() || data.length < table.getState().pagination.pageSize}
        onClick={() => table.nextPage()}
      >
        Selanjutnya
      </Button>
    </div>
  );
}
