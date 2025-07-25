import * as React from 'react';

import clsx from 'clsx';

export default function TOption({ children, icon: Icon, placeholder, onChange, value }) {
  return (
    <div className='relative flex items-center'>
      {Icon && (
        <div className='text-typo-secondary pointer-events-none absolute inset-y-0 left-3 flex items-center'>
          {Icon}
        </div>
      )}
      <select
        className={clsx(
          'text-typo-secondary block rounded-md px-8 text-sm font-semibold',
          'border-none outline-none focus:border-none focus:ring-0 focus:outline-none',
          'h-[2.25rem] py-0 md:h-[2.5rem]',
          'focus-visible:ring-primary-400 focus-visible:ring',
          'active:bg-primary-100 disabled:bg-primary-100'
        )}
        value={value}
        onChange={onChange}
      >
        {placeholder && (
          <option value='' disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>
    </div>
  );
}
