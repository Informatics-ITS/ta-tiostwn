import Typography from '@components/Typography';

export default function TypographySection() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <Typography as='h4' variant='h4' className='font-bold'>
          Typography Section
        </Typography>
        <Typography as='p' color='secondary'>
          This is a typography section where you can add your typography elements.
        </Typography>
        <br />
        <div className='space-y-1'>
          {/* Typograhy */}
          <Typography as='h2' variant='h1' className='font-bold'>
            Typography
          </Typography>
          <br />
          <br />

          <Typography variant='h1' className='font-semibold'>
            Display 2XL
          </Typography>
          <Typography variant='h2' className='font-semibold'>
            Display XL
          </Typography>
          <Typography variant='h3' className='font-semibold'>
            Display LG
          </Typography>
          <Typography variant='h4' className='font-semibold'>
            Display MD
          </Typography>
          <Typography variant='h5' className='font-semibold'>
            Display SM
          </Typography>
          <Typography variant='h6' className='font-semibold'>
            Display XS
          </Typography>
          <br />
          <Typography variant='b1' className='font-semibold'>
            Text XL
          </Typography>
          <Typography variant='b2' className='font-semibold'>
            Text LG
          </Typography>
          <Typography variant='b3' className='font-semibold'>
            Text MD
          </Typography>
          <Typography variant='c1' className='font-semibold'>
            Text SM
          </Typography>
          <Typography variant='c2' className='font-semibold'>
            Text XS
          </Typography>
        </div>
      </div>
    </section>
  );
}
