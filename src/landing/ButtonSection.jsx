import Button from '@components/buttons/Button';
import IconButton from '@components/buttons/IconButton';
import { Circle } from 'lucide-react';

export default function ButtonSection() {
  return (
    <section className='border-t-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <h2 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white'>
          Button Section
        </h2>
        <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          This is a section that showcases the buttons used in the application.
        </p>
        <div className='space-x-2'>
          <Button leftIcon={Circle} rightIcon={Circle} size='lg' variant='primary'>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='base' variant='primary'>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='sm' variant='primary'>
            Button
          </Button>
          <IconButton icon={Circle} variant='primary' />
        </div>
        <div className='mt-2 space-x-2'>
          <Button leftIcon={Circle} rightIcon={Circle} size='lg' variant='primary' disabled>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='base' variant='primary' disabled>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='sm' variant='primary' disabled>
            Button
          </Button>
          <IconButton icon={Circle} variant='primary' disabled />
        </div>
        <hr className='my-8 border-gray-200 dark:border-gray-700' />
        <div className='mt-2 space-x-2'>
          <Button leftIcon={Circle} rightIcon={Circle} size='lg' variant='outline'>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='base' variant='outline'>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='sm' variant='outline'>
            Button
          </Button>
          <IconButton icon={Circle} variant='outline' />
        </div>
        <div className='mt-2 space-x-2'>
          <Button leftIcon={Circle} rightIcon={Circle} size='lg' variant='outline' disabled>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='base' variant='outline' disabled>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='sm' variant='outline' disabled>
            Button
          </Button>
          <IconButton icon={Circle} variant='outline' disabled />
        </div>
        <hr className='my-8 border-gray-200 dark:border-gray-700' />
        <div className='mt-2 space-x-2'>
          <Button leftIcon={Circle} rightIcon={Circle} size='lg' variant='danger'>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='base' variant='danger'>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='sm' variant='danger'>
            Button
          </Button>
          <IconButton icon={Circle} variant='danger' />
        </div>
        <div className='mt-2 space-x-2'>
          <Button leftIcon={Circle} rightIcon={Circle} size='lg' variant='danger' disabled>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='base' variant='danger' disabled>
            Button
          </Button>
          <Button leftIcon={Circle} rightIcon={Circle} size='sm' variant='danger' disabled>
            Button
          </Button>
          <IconButton icon={Circle} variant='danger' disabled />
        </div>
      </div>
    </section>
  );
}
