import { CalendarDays } from 'lucide-react';
import { Heart } from 'lucide-react';

export default function CardSection() {
  return (
    <section className='border-t-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <h2 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white'>
          Card Component
        </h2>
        <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          This section showcases a card component that can be used to display training information,
          including an image, title, date, and price.
        </p>
        <div className='w-full max-w-xs overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg'>
          {/* Image */}
          <div className='relative'>
            <img
              src='/pelatihan.png'
              alt='Pelatihan Mos Excel'
              className='h-48 w-full object-cover'
            />
            <button className='absolute top-2 right-2 rounded-full bg-white p-1 shadow-md'>
              <Heart className='h-5 w-5 text-gray-600' />
            </button>
          </div>

          {/* Content */}
          <div className='p-4'>
            <span className='rounded-md bg-gray-200 px-2 py-1 text-xs text-gray-700'>Kategori</span>
            <h2 className='mt-2 text-lg font-semibold'>Pelatihan Mos Excel Associatea</h2>

            <hr className='my-2 border-gray-200 dark:border-gray-700' />

            <div className='mt-2 flex items-center text-sm text-gray-500'>
              <CalendarDays className='mr-1 h-4 w-4' />
              <span>21 & 22 September 2024</span>
            </div>

            {/* Price */}
            <div className='mt-4'>
              <p className='text-sm text-gray-400 line-through'>Rp. 4.500.000</p>
              <p className='text-xl font-bold text-orange-500'>Rp. 2.000.000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
