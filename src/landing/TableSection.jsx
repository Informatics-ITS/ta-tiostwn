import Tag from '@components/buttons/Tag';
import Table from '@components/table/Table';
import { TableData } from 'src/content/table';

export default function TableSection() {
  const columns = [
    {
      id: 'no',
      accessorKey: 'no',
    },
    {
      id: 'judul',
      accessorKey: 'judul',
      cell: ({ row }) => (
        <a
          href={row.original.link}
          className='font-medium text-blue-600 no-underline dark:text-blue-500'
          target='_blank'
          rel='noopener noreferrer'
        >
          {row.getValue('judul')}
        </a>
      ),
    },
    {
      id: 'kategori',
      accessorKey: 'kategori',
    },
    {
      id: 'pendaftar',
      accessorKey: 'pendaftar',
    },
    {
      id: 'status',
      accessorKey: 'status',
      cell: ({ row }) => (
        <Tag
          color={
            row.getValue('status') === 'Aktif'
              ? 'blue'
              : row.getValue('status') === 'Selesai'
                ? 'success'
                : row.getValue('status') === 'Batal'
                  ? 'danger'
                  : 'DEFAULT'
          }
        >
          {row.getValue('status')}
        </Tag>
      ),
    },
    {
      id: 'harga',
      accessorKey: 'harga',
    },
  ];

  return (
    <section className='border-t-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <h2 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white'>
          Table Section
        </h2>
        <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          This section showcases a table component that can be used to display data in a structured
          format. The table supports sorting and filtering functionalities, making it easy to
          navigate through large datasets.
        </p>

        <div className='px-4'>
          <Table
            columns={columns}
            data={TableData}
            withFilter
            header={
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Data Table</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Example of a table with sorting and filtering capabilities.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
