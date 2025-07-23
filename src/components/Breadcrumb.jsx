import clsx from 'clsx';
import * as React from 'react';

import UnstyledLink from './links/UnstyledLink';
import Typography from './Typography';

const breadcrumbs = {
  '/': 'Beranda',
  '/pelatihan': 'Pelatihan',
  '/pelatihan/mos': 'Pelatihan MOS Excel Associate',
};

export default function Breadcrumb({ className, crumbs: _crumbs, ...rest }) {
  // split array into the last part and the rest
  const lastCrumb = _crumbs[_crumbs.length - 1];
  const crumbs = _crumbs.slice(0, _crumbs.length - 1);

  return (
    <div className={clsx('space-x-1', className)} {...rest}>
      {crumbs.map((crumb) => (
        <React.Fragment key={crumb}>
          <UnstyledLink href={crumb} size='sm' className='font-semibold text-[#1890FF]'>
            {breadcrumbs[crumb]}
          </UnstyledLink>
          <span className='text-typo text-sm font-medium'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='inline-block h-4 w-4'
            >
              <path d='M9 18l6-6-6-6' />
            </svg>
          </span>
        </React.Fragment>
      ))}
      <Typography
        as='span'
        variant='s2'
        className='leading-5 font-semibold tracking-wider !text-[#9AA2B1]'
      >
        {breadcrumbs[lastCrumb]}
      </Typography>
    </div>
  );
}
