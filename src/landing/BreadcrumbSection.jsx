import Breadcrumb from '@components/Breadcrumb';

export default function BreadcrumbSection() {
  return (
    <section className='border-t-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <h2 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white'>
          Breadcrumb Section
        </h2>
        <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          This section showcases the breadcrumb navigation used in the application. Breadcrumbs help
          users understand their current location within the app and provide a way to navigate back
          to previous sections.
        </p>

        <div>
          <Breadcrumb crumbs={['/', '/pelatihan']} className='mb-4' />
          <Breadcrumb crumbs={['/', '/pelatihan', '/pelatihan/mos']} className='mb-4' />
        </div>
      </div>
    </section>
  );
}
