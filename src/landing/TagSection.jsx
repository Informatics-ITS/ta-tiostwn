import Tag from '@components/buttons/Tag';

export default function TagSection() {
  return (
    <section className='border-t-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <h2 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white'>Tag Section</h2>
        <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          This section showcases the tags used in the application. Tags are used to categorize and
          label items, making it easier to filter and search through content.
        </p>
        <div className='flex flex-wrap gap-2'>
          <Tag color='DEFAULT' size='lg'>
            label
          </Tag>
          <Tag color='blue' size='lg'>
            label
          </Tag>
          <Tag color='danger' size='lg'>
            label
          </Tag>
          <Tag color='orange' size='lg'>
            label
          </Tag>
          <Tag color='success' size='lg'>
            label
          </Tag>
          <Tag color='purple' size='lg'>
            label
          </Tag>
        </div>
        <div className='mt-2 flex flex-wrap gap-2'>
          <Tag color='DEFAULT' size='base'>
            label
          </Tag>
          <Tag color='blue' size='base'>
            label
          </Tag>
          <Tag color='danger' size='base'>
            label
          </Tag>
          <Tag color='orange' size='base'>
            label
          </Tag>
          <Tag color='success' size='base'>
            label
          </Tag>
          <Tag color='purple' size='base'>
            label
          </Tag>
        </div>
        <div className='mt-2 flex flex-wrap gap-2'>
          <Tag color='DEFAULT' size='sm'>
            label
          </Tag>
          <Tag color='blue' size='sm'>
            label
          </Tag>
          <Tag color='danger' size='sm'>
            label
          </Tag>
          <Tag color='orange' size='sm'>
            label
          </Tag>
          <Tag color='success' size='sm'>
            label
          </Tag>
          <Tag color='purple' size='sm'>
            label
          </Tag>
        </div>
      </div>
    </section>
  );
}
