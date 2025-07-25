import clsx from 'clsx';
import { Search, XCircle } from 'lucide-react';
import * as React from 'react';

const DEBOUNCE_MS = 300;

export default function Filter({ className, table, ...rest }) {
  const [filter, setFilter] = React.useState('');

  const handleClearFilter = () => {
    table.setGlobalFilter('');
    setFilter('');
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      table.setGlobalFilter(filter);
    }, DEBOUNCE_MS);
    return () => clearTimeout(timeout);
  }, [filter, table]);

  return (
    <div className={clsx('relative mt-1 self-start', className)} {...rest}>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <Search className='text-typo text-xl' />
      </div>
      <input
        type='text'
        value={filter ?? ''}
        onChange={(e) => {
          setFilter(String(e.target.value));
        }}
        className={clsx(
          'flex w-full rounded-lg shadow-sm',
          'min-h-[2.25rem] px-9 py-0 md:min-h-[2.5rem]',
          'focus:border-primary-500 focus:ring-primary-500 border-gray-300'
        )}
        placeholder='Search...'
      />
      {table.getState().globalFilter !== '' && (
        <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
          <button type='button' onClick={handleClearFilter} className='p-1'>
            <XCircle className='text-typo-icons text-xl' />
          </button>
        </div>
      )}
    </div>
  );
}
