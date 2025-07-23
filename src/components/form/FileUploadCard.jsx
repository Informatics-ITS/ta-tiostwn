import { FileTextIcon } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

const FileUploadCard = ({ id, fileName, fileSize = '200 KB', progress, isDone }) => {
  const { control } = useFormContext();

  return (
    <Controller
      id={id}
      name={id}
      control={control}
      defaultValue={false}
      render={({ field }) => (
        <div
          className='flex w-[420px] cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md'
          onClick={() => field.onChange(!field.value)}
        >
          <div className='flex gap-3'>
            {/* PDF Icon */}
            <div className='mt-1'>
              <div className='relative h-10 w-8'>
                <FileTextIcon className='absolute -top-1 text-xl text-red-600' />
              </div>
            </div>

            {/* File Info */}
            <div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-medium text-gray-800'>{fileName}</p>
                {(isDone || progress === 100) && (
                  <input
                    type='checkbox'
                    className='h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 bg-white checked:border-transparent checked:bg-blue-500 focus:outline-none'
                    checked={field.value}
                    onChange={() => field.onChange(!field.value)}
                  />
                )}
              </div>
              <p className='mb-2 text-xs text-gray-500'>{fileSize}</p>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-70 overflow-hidden rounded-full bg-gray-200'>
                  <div
                    className='h-full rounded-full bg-blue-500 transition-all duration-300'
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className='text-sm font-medium text-gray-700'>{progress}%</span>
              </div>
            </div>
          </div>

          {/* Check Icon (only if isDone or progress === 100) */}
        </div>
      )}
    />
  );
};

export default FileUploadCard;
