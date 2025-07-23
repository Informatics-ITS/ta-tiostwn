import FilePreview from '@components/form/FilePreview';
import Typography from '@components/Typography';
import clsx from 'clsx';
import get from 'lodash.get';
import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';

const DEFAULT_MIN_SIZE = 100_000;
const DEFAULT_MAX_SIZE = 400_000;

export default function DropzoneInput({
  accept,
  helperText = '',
  id,
  label,
  maxFiles = 1,
  validation,
  readOnly,
  hideError = false,
  ...dropzoneOptions
}) {
  const {
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);
  const withLabel = label !== null;

  //#region  //*=========== Error Focus ===========
  const dropzoneRef = React.useRef(null);

  React.useEffect(() => {
    error && dropzoneRef.current?.focus();
  }, [dropzoneRef, error]);
  //#endregion  //*======== Error Focus ===========

  //#region  //*=========== Sync Files With RHF ===========
  const fileValue = getValues(id);
  const [files, setFiles] = React.useState(fileValue || []);

  React.useEffect(() => {
    setFiles(fileValue);
  }, [fileValue]);
  //#endregion  //*======== Sync Files With RHF ===========

  const onDrop = React.useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setValue(id, files ? [...files] : null);
        setValue(id, files ? [...files] : null);

        let message = rejectedFiles && rejectedFiles[0].errors[0].message;
        if (rejectedFiles[0].errors[0].code === 'file-too-large') {
          message = `File terlalu besar, maksimal ${
            (dropzoneOptions.maxSize || DEFAULT_MAX_SIZE) / 1000
          }KB`;
        } else if (rejectedFiles[0].errors[0].code === 'file-too-small') {
          message = `File terlalu kecil, minimal ${
            (dropzoneOptions.minSize || DEFAULT_MIN_SIZE) / 1000
          }KB`;
        } else if (rejectedFiles[0].errors[0].code === 'too-many-files') {
          message = `Maksimal ${maxFiles} file`;
        } else if (rejectedFiles[0].errors[0].code === 'file-invalid-type') {
          message = message.replace('File type must be', 'Ekstensi file yang diperbolehkan adalah');
        }

        setError(id, {
          type: 'manual',
          message: message,
        });
      } else {
        const acceptedFilesPreview = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );

        setFiles(
          files ? [...files, ...acceptedFilesPreview].slice(0, maxFiles) : acceptedFilesPreview
        );

        setValue(id, files ? [...files, ...acceptedFiles].slice(0, maxFiles) : acceptedFiles, {
          shouldValidate: true,
        });
        clearErrors(id);
      }
    },
    [
      clearErrors,
      dropzoneOptions.maxSize,
      dropzoneOptions.minSize,
      files,
      id,
      maxFiles,
      setError,
      setValue,
    ]
  );

  React.useEffect(() => {
    return () => {
      () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      };
    };
  }, [files]);

  const deleteFile = (e, file) => {
    e.preventDefault();
    const newFiles = [...files];

    newFiles.splice(newFiles.indexOf(file), 1);

    if (newFiles.length > 0) {
      setFiles(newFiles);
      setValue(id, newFiles, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    } else {
      setFiles([]);
      setValue(id, null, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    // 5KB
    minSize: dropzoneOptions.minSize || DEFAULT_MIN_SIZE,
    // 400KB
    maxSize: dropzoneOptions.maxSize || DEFAULT_MAX_SIZE,
    ...dropzoneOptions,
  });

  return (
    <div>
      {withLabel && (
        <Typography as='label' variant='s3' className='block' htmlFor={id}>
          {label}
        </Typography>
      )}

      {readOnly && !(files?.length > 0) ? (
        <div className='mt-1 divide-y divide-gray-300 rounded-lg border border-gray-300 py-3 pr-4 pl-3 text-sm'>
          Tidak ada file yang diupload
        </div>
      ) : files?.length >= maxFiles ? (
        <ul
          className={clsx([
            'divide-y divide-gray-300 rounded-lg border border-gray-300',
            withLabel && 'mt-1',
          ])}
        >
          {files.map((file, index) => (
            <FilePreview key={index} readOnly={readOnly} file={file} deleteFile={deleteFile} />
          ))}
        </ul>
      ) : (
        <Controller
          control={control}
          name={id}
          rules={validation}
          render={({ field }) => (
            <>
              <div
                className={clsx([
                  'focus:ring-dark-400 group focus:outline-none',
                  withLabel && 'mt-1',
                ])}
                {...getRootProps()}
                ref={dropzoneRef}
              >
                <input {...field} {...getInputProps()} />
                <div
                  className={clsx(
                    'w-full cursor-pointer rounded-lg px-2 py-8',
                    error
                      ? 'dropzone-border-dash-error border-red-500 group-focus:border-red-500'
                      : 'dropzone-border-dash group-focus:border-primary-500'
                  )}
                >
                  <div className='flex flex-col items-center space-y-1 text-center'>
                    <svg
                      width='44'
                      height='44'
                      viewBox='0 0 44 44'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g filter='url(#filter0_dii_31_88)'>
                        <path
                          d='M2 9C2 4.58172 5.58172 1 10 1H34C38.4183 1 42 4.58172 42 9V33C42 37.4183 38.4183 41 34 41H10C5.58172 41 2 37.4183 2 33V9Z'
                          fill='white'
                        />
                        <path
                          d='M10 1.5H34C38.1421 1.5 41.5 4.85786 41.5 9V33C41.5 37.1421 38.1421 40.5 34 40.5H10C5.85786 40.5 2.5 37.1421 2.5 33V9C2.5 4.85786 5.85786 1.5 10 1.5Z'
                          stroke='#E9EAEB'
                        />
                        <path
                          d='M18.6667 24.3333L22 21M22 21L25.3333 24.3333M22 21V28.5M28.6667 24.9524C29.6846 24.1117 30.3333 22.8399 30.3333 21.4167C30.3333 18.8854 28.2813 16.8333 25.75 16.8333C25.5679 16.8333 25.3975 16.7383 25.3051 16.5814C24.2184 14.7374 22.212 13.5 19.9167 13.5C16.4649 13.5 13.6667 16.2982 13.6667 19.75C13.6667 21.4718 14.3629 23.0309 15.4891 24.1613'
                          stroke='#414651'
                          strokeWidth='1.66667'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <filter
                          id='filter0_dii_31_88'
                          x='0'
                          y='0'
                          width='44'
                          height='44'
                          filterUnits='userSpaceOnUse'
                          colorInterpolationFilters='sRGB'
                        >
                          <feFlood floodOpacity='0' result='BackgroundImageFix' />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='1' />
                          <feGaussianBlur stdDeviation='1' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='BackgroundImageFix'
                            result='effect1_dropShadow_31_88'
                          />
                          <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect1_dropShadow_31_88'
                            result='shape'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='-2' />
                          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0'
                          />
                          <feBlend mode='normal' in2='shape' result='effect2_innerShadow_31_88' />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feMorphology
                            radius='1'
                            operator='erode'
                            in='SourceAlpha'
                            result='effect3_innerShadow_31_88'
                          />
                          <feOffset />
                          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='effect2_innerShadow_31_88'
                            result='effect3_innerShadow_31_88'
                          />
                        </filter>
                      </defs>
                    </svg>

                    <p className='text-gray-500'>
                      <span className='text-blue-500'>Klik untuk upload</span>, atau drag file ke
                      sini
                    </p>
                    <p className='text-xs text-gray-500'>{`${
                      maxFiles - (files?.length || 0)
                    } file lagi`}</p>
                  </div>
                </div>
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
              {!readOnly && !!files?.length && (
                <ul className='mt-1 divide-y divide-gray-300 rounded-lg border border-gray-300'>
                  {files.map((file, index) => (
                    <FilePreview
                      key={index}
                      readOnly={readOnly}
                      file={file}
                      deleteFile={deleteFile}
                    />
                  ))}
                </ul>
              )}
            </>
          )}
        />
      )}
    </div>
  );
}
