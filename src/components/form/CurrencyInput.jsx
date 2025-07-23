import Typography from '@components/Typography';
import clsx from 'clsx';
import get from 'lodash.get';
import { useFormContext } from 'react-hook-form';

export default function CurrencyInput({
  id,
  label = 'Harga',
  placeholder = 'Masukkan harga',
  validation,
  helperText,
  hideError = false,
  disabled,
  readOnly = false,
  containerClassName,
  ...rest
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);

  return (
    <div className={clsx('w-full', containerClassName)}>
      <Typography as='label' variant='s3' className='block' htmlFor={id}>
        {label}
      </Typography>

      <div className='focus-within:border-primary-500 focus-within:ring-primary-500 mt-1 flex overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-1'>
        <div className='flex items-center border-r border-gray-300 bg-gray-50 px-3 text-sm font-medium text-gray-700'>
          Rp
        </div>
        <input
          {...register(id, validation)}
          {...rest}
          type='text'
          id={id}
          name={id}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          className={clsx(
            'min-h-[2.5rem] flex-1 px-3 py-1 text-sm',
            'border-none outline-none focus:outline-none',
            'placeholder:text-gray-400',
            (readOnly || disabled) && 'cursor-not-allowed bg-gray-100 text-gray-500',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
          )}
        />
      </div>

      {helperText && (
        <Typography variant='c1' color='secondary' className='mt-1'>
          {helperText}
        </Typography>
      )}
      {!hideError && error && (
        <Typography variant='c1' color='danger' className='mt-1'>
          {error?.message?.toString()}
        </Typography>
      )}
    </div>
  );
}
