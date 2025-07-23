import clsx from 'clsx';
import { Loader2 } from 'lucide-react';
import * as React from 'react';

const IconButton = React.forwardRef(
  (
    {
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'base',
      icon: Icon,
      iconClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsx(
          'inline-flex items-center justify-center rounded-lg font-medium',
          'focus:outline-none focus-visible:ring',
          'shadow-sm',
          'transition-colors duration-75',
          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'min-h-[2.75rem] min-w-[2.75rem] md:min-h-[3rem] md:min-w-[3rem]',
              'text-base',
            ],
            size === 'base' && [
              'min-h-[2.25rem] min-w-[2.25rem] md:min-h-[2.5rem] md:min-w-[2.5rem]',
              'text-sm md:text-base',
            ],
            size === 'sm' && [
              'min-h-[1.75rem] min-w-[1.75rem] md:min-h-[2rem] md:min-w-[2rem]',
              'text-xs md:text-sm',
            ],
            size === 'xs' && ['p-1', 'text-xs md:text-sm'],
          ],
          //#region  //*=========== Variants ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-[#1890FF] text-white',
              'border border-[#2F80ED]',
              'hover:bg-[#2F80ED] hover:text-white',
              'active:bg-[#1878F2]',
              'disabled:border-[#E9EAEB] disabled:bg-[#E9EAEB] disabled:!text-[#A4A7AE]',
              'focus-visible:ring-[#2F80ED]',
            ],
            variant === 'secondary' && [
              'bg-secondary-500 text-white',
              'border-secondary-600 border',
              'hover:bg-secondary-600 hover:text-white',
              'active:bg-secondary-700',
              'disabled:bg-secondary-700',
              'focus-visible:ring-secondary-400',
            ],
            variant === 'danger' && [
              'bg-red-500 text-white',
              'border border-red-600',
              'hover:bg-red-600 hover:text-white',
              'active:bg-red-700',
              'disabled:!border-[#E9EAEB] disabled:bg-[#E9EAEB] disabled:!text-[#A4A7AE]',
              'focus-visible:ring-red-400',
            ],
            variant === 'warning' && [
              'bg-amber-500 text-white',
              'border border-amber-500',
              'hover:bg-amber-600 hover:text-white',
              'active:bg-amber-700',
              'disabled:bg-amber-700',
              'focus-visible:ring-amber-400',
            ],
            variant === 'outline' && [
              'text-typo',
              'border border-gray-300',
              'hover:bg-light focus-visible:ring-primary-400 active:bg-typo-divider',
              'disabled:!border-[#E9EAEB] disabled:!text-[#A4A7AE]',
            ],
            variant === 'ghost' && [
              'text-primary-500',
              'shadow-none',
              'hover:bg-primary-50 focus-visible:ring-primary-400 active:bg-primary-100 disabled:bg-primary-100',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsx('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', {
              'text-white': ['primary', 'secondary', 'danger', 'warning'].includes(variant),
              'text-primary-500': ['outline', 'ghost'].includes(variant),
            })}
          >
            <Loader2 size={18} className='animate-spin' />
          </div>
        )}
        {Icon && <Icon size='1em' className={clsx(iconClassName)} />}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
