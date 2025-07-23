import 'react-image-lightbox-rotation/style.css';

import UnstyledLink from '@components/links/UnstyledLink';
import { ExternalLink, Eye, Image as ImageIcon, Paperclip } from 'lucide-react';
import { X } from 'lucide-react';
import * as React from 'react';
import Lightbox from 'react-image-lightbox-rotation';

export default function FilePreview({ deleteFile, file, readOnly }) {
  const [index, setIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const images = [file.preview];

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteFile?.(e, file);
  };

  const imagesType = ['image/png', 'image/jpg', 'image/jpeg'];

  return imagesType.includes(file.type) ? (
    <>
      <li
        className='flex min-h-[2.25rem] items-center justify-between py-0 pr-4 pl-3 text-sm md:min-h-[2.5rem]'
        key={file.name}
      >
        <div className='flex w-0 flex-1 items-center'>
          <ImageIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
          <span className='ml-2 w-0 flex-1 truncate'>{file.name}</span>
        </div>
        <div className='ml-4 flex flex-shrink-0 items-center space-x-2'>
          <button
            type='button'
            onClick={() => setIsOpen(true)}
            className='focus:ring-primary-500 inline-block rounded text-xl font-medium text-gray-500 hover:text-gray-700 focus:ring focus:outline-none'
          >
            <Eye />
          </button>
          {!readOnly && (
            <button
              type='button'
              onClick={handleDelete}
              className='rounded text-xl font-medium text-red-500 hover:text-red-700 focus:ring focus:ring-red-500 focus:outline-none'
            >
              <X />
            </button>
          )}
        </div>
      </li>
      {isOpen && (
        <Lightbox
          mainSrc={images[index]}
          nextSrc={images[(index + 1) % images.length]}
          prevSrc={images[(index + images.length - 1) % images.length]}
          rotate={0}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIndex((prevIndex) => (prevIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setIndex((prevIndex) => (prevIndex + 1) % images.length)}
        />
      )}
    </>
  ) : (
    <li
      key={file.name}
      className='flex min-h-[2.25rem] items-center justify-between py-0 pr-4 pl-3 text-sm md:min-h-[2.5rem]'
    >
      <div className='flex w-0 flex-1 items-center'>
        <Paperclip className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
        <span className='ml-2 w-0 flex-1 truncate'>{file.name}</span>
      </div>
      <div className='ml-4 flex flex-shrink-0 items-center space-x-2'>
        <UnstyledLink
          href={file.preview}
          className='focus:ring-primary-500 rounded text-gray-500 hover:text-gray-700 focus:ring focus:outline-none'
        >
          <ExternalLink size={20} />
        </UnstyledLink>
        {!readOnly && (
          <button
            className='cursor-pointer rounded text-red-500 hover:text-red-700 focus:ring focus:ring-red-500 focus:outline-none'
            type='button'
            onClick={(e) => deleteFile?.(e, file)}
          >
            <X size={24} />
          </button>
        )}
      </div>
    </li>
  );
}
