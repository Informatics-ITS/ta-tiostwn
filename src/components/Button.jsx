import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import IconButton from '@components/buttons/IconButton';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';

import Typography from './Typography';

function NextArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      icon={ChevronRight}
      variant='ghost'
      size='sm'
      className='absolute top-1/2 right-2 z-10 flex -translate-y-1/2 items-center rounded-full bg-white/30 transition hover:bg-white/50'
    />
  );
}

function PrevArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      icon={ChevronLeft}
      variant='ghost'
      size='sm'
      className='absolute top-1/2 left-2 z-10 flex -translate-y-1/2 items-center rounded-full bg-white/30 transition hover:bg-white/50'
    />
  );
}

const settings = {
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function Banner({ className, ...rest }) {
  return (
    <div
      className={clsx(
        'w-full bg-[#F79009] px-4 py-3 md:px-6',
        'flex min-h-[4rem] items-center',
        className
      )}
      {...rest}
    >
      <div className='mx-auto w-full max-w-screen-xl'>
        <Slider {...settings}>
          <div className='px-2 text-center'>
            <Typography
              variant='b3'
              font='averta'
              className='text-sm leading-relaxed text-white md:text-base'
            >
              Anda belum melengkapi data diri Anda, lengkapi data diri Anda agar dapat melakukan
              pendaftaran pelatihan
            </Typography>
          </div>
        </Slider>
      </div>
    </div>
  );
}
