import clsx from 'clsx';
import * as React from 'react';

const Tag = React.forwardRef(
  (
    {
      children,
      className,
      color = 'DEFAULT',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          [
            size === 'sm' && ['py-0.5 text-xs'],
            size === 'base' && ['py-1 text-sm'],
            size === 'lg' && ['py-1 text-base'],
          ],

          //#region  //*=========== Color ===========
          color === 'DEFAULT' && 'border border-[#E9EAEB] bg-[#FAFAFA] text-[#414651]',
          color === 'primary' && 'bg-primary-100 text-primary-700',
          color === 'secondary' && 'bg-secondary-100 text-secondary-700',
          color === 'danger' && 'bg-red-100 text-red-700',
          color === 'orange' && 'bg-orange-100 text-orange-700',
          color === 'warning' && 'bg-yellow-100 text-yellow-700',
          color === 'success' && 'border border-green-200 bg-green-100 text-green-700',
          color === 'blue' && 'border border-blue-200 bg-blue-100 text-blue-700',
          color === 'purple' && 'border border-[#D9D6FE] bg-[#F4F3FF] text-[#5925DC]',
          //#endregion  //*======== Color ===========
          'inline-flex items-center gap-1 rounded-lg px-3 font-medium',
          LeftIcon && 'pl-2.5',
          RightIcon && 'pr-2.5',
          className
        )}
        ref={ref}
        {...rest}
      >
        {LeftIcon && (
          <div>
            <LeftIcon size='1em' className={clsx(leftIconClassName)} />
          </div>
        )}
        {children}
        {RightIcon && (
          <div>
            <RightIcon size='1em' className={clsx(rightIconClassName)} />
          </div>
        )}
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
