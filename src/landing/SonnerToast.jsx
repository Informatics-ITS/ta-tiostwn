import Button from '@components/buttons/Button';
import { toast } from 'sonner';

export default function SonnerToastPage() {
  return (
    <section className='border-t-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <h2 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white'>
          Sonner Toast Section
        </h2>
        <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          This section demonstrates the usage of Sonner for toast notifications. You can trigger
          different types of toasts such as success, error, loading, and info. Additionally, it
          includes a mutation example that shows how to handle API calls with toast notifications.
        </p>{' '}
        <div className='layout min-h-screen py-20'>
          <div className='mt-4 flex flex-wrap gap-3'>
            <Button
              onClick={() =>
                toast.success('success', {
                  description: 'this is description',
                })
              }
            >
              Success
            </Button>
            <Button onClick={() => toast.error('Oops! Something went wrong')}>Error</Button>
            <Button onClick={() => toast.loading('Loading...')}>Loading</Button>
            <Button onClick={() => toast.info('For your information')}>Info</Button>
            <Button
              onClick={() =>
                toast('Click here', {
                  action: {
                    label: 'Action',
                    onClick: () => toast.success('Action clicked'),
                  },
                  cancel: {
                    label: 'Cancel',
                    onClick: () => toast.error('Cancel clicked'),
                  },
                })
              }
            >
              Action
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
