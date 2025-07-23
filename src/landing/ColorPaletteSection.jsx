const grayscaleColors = [
  '#00000005',
  '#0000000F',
  '#00000026',
  '#D9D9D9',
  '#00000040',
  '#12121266',
  '#00000066',
  '#00000073',
  '#1E1E1E',
  '#000000E0',
  '#000000FF',
  '#000000F0',
];

const typographyColors = [
  '#FFFFFF',
  '#F9FAFB',
  '#F0F2F5',
  '#E4E7EB',
  '#D1D5DC',
  '#9AA2B1',
  '#687083',
  '#1A3650',
  '#111827',
];

const primaryColors = [
  '#1878F21A',
  '#2F80ED1A',
  '#E6F4FF',
  '#91CAFF',
  '#1890FF',
  '#2F80ED',
  '#1878F2',
  '#1677FF',
  '#003EB3',
];

const colors = [
  {
    name: 'Grayscale',
    colors: grayscaleColors,
  },
  {
    name: 'Typography',
    colors: typographyColors,
  },
  {
    name: 'Primary',
    colors: primaryColors,
  },
];

const ColorPaletteSection = () => {
  return (
    <section className='border-t-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <h2 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white'>
          Color Palette
        </h2>
        <p className='mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          This is a color palette section where you can see the colors used in the design system.
        </p>
        {colors.map((colorGroup) => (
          <div key={colorGroup.name} className='mt-4 flex flex-col gap-2'>
            <h3 className='text-lg font-semibold'>{colorGroup.name}</h3>
            <div className='flex flex-wrap gap-2'>
              {colorGroup.colors.map((color) => (
                <div
                  key={color}
                  className='h-20 w-20 rounded shadow-md'
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColorPaletteSection;
