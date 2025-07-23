import clsx from 'clsx';
import * as React from 'react';

const Typography = React.forwardRef(
  ({ as, children, className, color = 'primary', variant = 'b2', font, ...rest }, ref) => {
    const Component = as || 'p';
    return (
      <Component
        ref={ref}
        className={clsx(
          //#region  //*=========== Variants ===========
          [variant === 'h1' && ['font-inter text-7xl']],
          [variant === 'h2' && ['font-inter text-6xl']],
          [variant === 'h3' && ['font-inter text-5xl']],
          [variant === 'h4' && ['font-inter text-4xl']],
          [variant === 'h5' && ['font-inter text-3xl']],
          [variant === 'h6' && ['font-inter text-2xl']],
          [variant === 'base' && ['text-base']],
          [variant === 'b1' && ['text-xl']],
          [variant === 'b2' && ['text-lg']],
          [variant === 'b3' && ['text-base']],
          [variant === 'c1' && ['text-sm']],
          [variant === 'c2' && ['text-xs']],
          [variant === 's3' && ['text-sm']],
          //#endregion  //*======== Variants ===========
          //#region  //*=========== Color ===========
          [
            color === 'primary' && ['text-black'],
            color === 'secondary' && ['text-gray-700'],
            color === 'tertiary' && ['text-gray-500'],
            color === 'danger' && ['text-red-500'],
            color === 'white' && ['text-white'],
          ],
          //#endregion  //*======== Color ===========
          //#region  //*=========== Font ===========
          [font === 'averta' && ['font-averta'], font === 'inter' && ['font-primary']],
          //#endregion  //*======== Font ===========
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
