import 'react-tagsinput/react-tagsinput.css';

import Typography from '@components/Typography';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { Controller, get, useFormContext } from 'react-hook-form';
import TI from 'react-tagsinput';

export default function TagsInput({
  label,
  id,
  validation,
  placeholder = 'Add tags',
  disabled,
  withLabel = true,
  containerClassName,
  maxTags = -1,
  helperText,
  hideError = false,
  onlyUnique,
  ...rest
}) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  return (
    <div className={containerClassName}>
      {withLabel && (
        <Typography as='label' variant='s3' className='block' htmlFor={id}>
          {label}
        </Typography>
      )}
      <div className={clsx('relative', withLabel && 'mt-1')}>
        <Controller
          name={id}
          rules={validation}
          render={({ field: { onChange, value } }) => (
            <>
              <TI
                {...rest}
                value={value || []}
                onChange={onChange}
                maxTags={maxTags}
                disabled={disabled}
                onlyUnique={onlyUnique}
                className={clsx(
                  'flex w-full items-center rounded-lg shadow-sm',
                  'min-h-[2.25rem] py-0.5 md:min-h-[2.5rem]',
                  'border border-gray-300',
                  disabled &&
                    'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0',
                  error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
                )}
                focusedClassName='focus:border-primary-500 focus:ring-primary-500'
                inputProps={{
                  placeholder: placeholder,
                  className: clsx(
                    disabled ? 'hidden' : '',
                    'inline-block rounded-lg',
                    'border-none focus:border-none focus:ring-0'
                  ),
                }}
                tagProps={{
                  className: clsx(
                    'inline-flex items-center font-medium',
                    'border text-white px-2 py-0.5',
                    'rounded-lg ml-1 !text-gray-500',
                    'focus:border-none focus:ring-1'
                  ),
                  classNameRemove: 'cursor-pointer',
                }}
                renderTag={defaultRenderTag}
              />
            </>
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

function defaultRenderTag(props) {
  const { tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other } = props;
  return (
    <span key={key} {...other}>
      {getTagDisplayValue(tag)}
      {!disabled && (
        <X
          onClick={() => onRemove(key)}
          className={clsx('ml-1 inline-flex text-black', classNameRemove)}
          size={14}
        />
      )}
    </span>
  );
}
