import Button from '@components/buttons/Button';
import { ExampleModal } from '@components/modal/ExampleModal';

export default function ModalSection() {
  return (
    <section className='border-t-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <h2 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white'>
          Button Section
        </h2>
        <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          This is a section that showcases the buttons used in the application.
        </p>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <div className='space-x-2'>
              <ExampleModal>
                {({ openModal }) => <Button onClick={openModal}>Open Modal</Button>}
              </ExampleModal>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
