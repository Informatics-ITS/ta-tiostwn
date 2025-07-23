import 'react-datepicker/dist/react-datepicker.css';

import Typography from '@components/Typography';
import clsx from 'clsx';
import get from 'lodash.get';
import { Calendar } from 'lucide-react';
import ReactDatePicker from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';

export default function DatePicker({
  validation,
  label,
  id,
  placeholder,
  defaultYear,
  defaultMonth,
  defaultValue,
  helperText,
  readOnly = false,
  hideError = false,
  disabled,
  containerClassName,
  ...rest
}) {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  const error = get(errors, id);
  const withLabel = label !== null;

  // If there is a year default, then change the year to the props
  const defaultDate = new Date();
  if (defaultYear) defaultDate.setFullYear(defaultYear);
  if (defaultMonth) defaultDate.setMonth(defaultMonth);

  return (
    <div className={clsx('relative', containerClassName)}>
      {withLabel && (
        <Typography as='label' variant='s3' className='block' htmlFor={id}>
          {label}
        </Typography>
      )}

      <Controller
        control={control}
        rules={validation}
        defaultValue={defaultValue}
        name={id}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <div className={clsx('relative', withLabel && 'mt-1')}>
              <ReactDatePicker
                name={id}
                onChange={onChange}
                onBlur={onBlur}
                selected={value ? new Date(value) : undefined}
                className={clsx(
                  'flex w-full rounded-lg shadow-sm',
                  'min-h-[2.25rem] py-0 md:min-h-[2.5rem]',
                  'focus:border-primary-500 focus:ring-primary-500 border-gray-300',
                  (readOnly || disabled) &&
                    'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0',
                  error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
                )}
                placeholderText={placeholder}
                aria-describedby={id}
                showMonthDropdown
                showYearDropdown
                dropdownMode='select'
                openToDate={value ? new Date(value) : defaultDate}
                dateFormat='dd/MM/yyyy'
                readOnly={readOnly}
                disabled={disabled}
                {...rest}
              />
              <Calendar
                size={18}
                className='text-typo-icons pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 transform'
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
          </>
        )}
      />
    </div>
  );
}
