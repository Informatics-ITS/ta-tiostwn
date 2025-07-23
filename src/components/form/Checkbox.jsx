import Typography from '@components/Typography';
import clsx from 'clsx';
import get from 'lodash.get';
import { useFormContext } from 'react-hook-form';

export default function Checkbox({
  label,
  name,
  value,
  placeholder = '',
  helperText,
  readOnly = false,
  hideError = false,
  validation,
  size = 'base',
  disabled,
  ...rest
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);

  return (
    <div>
      <div className='flex items-start gap-2'>
        <input
          {...register(name, validation)}
          {...rest}
          type='checkbox'
          name={name}
          id={`${name}_${value}`}
          value={value}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(
            // add top margin so the checkbox align with the text
            'mt-[0.25em]',
            'shrink-0 cursor-pointer',
            'rounded-sm focus:ring-0 focus:ring-offset-0',
            'checked:bg-primary-500 checked:hover:bg-primary-600 checked:focus:bg-primary-500 checked:active:bg-primary-700',
            (readOnly || disabled) &&
              'disabled:checked:bg-primary-400 cursor-not-allowed bg-gray-100',
            error && 'border-danger-400 bg-danger-100',
            size === 'sm' && 'h-3.5 w-3.5'
          )}
          placeholder={placeholder}
          aria-describedby={name}
        />
        <Typography
          className={clsx((readOnly || disabled) && 'cursor-not-allowed')}
          as='label'
          htmlFor={`${name}_${value}`}
          variant={'s2'}
        >
          {label}
        </Typography>
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
