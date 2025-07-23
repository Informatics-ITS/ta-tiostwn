export default function TrainingCard({ className = '', style = {}, ...props }) {
  return (
    <div className='w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg'>
      {/* Image */}
      <div className='relative'>
        <img
          src='/path-to-your-image/Card.png'
          alt='Pelatihan Mos Excel'
          className='h-48 w-full object-cover'
        />
        <button className='absolute top-2 right-2 rounded-full bg-white p-1 shadow-md'>
          <Heart className='h-5 w-5 text-gray-600' />
        </button>
        <div className='absolute right-2 bottom-2 rounded bg-green-600 px-2 py-1 text-xs text-white'>
          X
        </div>
      </div>

      {/* Content */}
      <div className='p-4'>
        <span className='rounded-md bg-gray-200 px-2 py-1 text-xs text-gray-700'>Kategori</span>
        <h2 className='mt-2 text-lg font-semibold'>Pelatihan Mos Excel Associatea</h2>

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
  );
}
