import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import Button from './buttons/Button';
import UnstyledLink from './links/UnstyledLink';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 md:px-24'>
      {/* Logo & Nav */}
      <div className='flex w-full items-center justify-between md:w-auto'>
        <div className='flex items-center space-x-4'>
          <img src='/logo.png' alt='Logo' className='h-10 w-auto' />
        </div>

        {/* Mobile Menu Toggle */}
        <button className='text-gray-700 md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </div>

      {/* Navigation (Desktop) */}
      <nav className='hidden space-x-6 font-medium text-gray-700 md:flex'>
        <UnstyledLink href='#' className='text-gray-500 no-underline'>
          Pelatihan
        </UnstyledLink>
        <UnstyledLink href='#' className='text-gray-500 no-underline'>
          Artikel
        </UnstyledLink>
        <UnstyledLink href='#' className='text-gray-500 no-underline'>
          Tentang Kami
        </UnstyledLink>
        <UnstyledLink href='#' className='text-gray-500 no-underline'>
          Ajukan Kerjasama
        </UnstyledLink>
      </nav>

      {/* Action Buttons (Desktop) */}
      <div className='hidden space-x-4 md:flex'>
        <Button variant='outline' href='/daftar'>
          Daftar
        </Button>
        <Button href='/masuk'>Masuk</Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-20 left-0 z-50 w-full bg-white shadow-md md:hidden'>
          <nav className='flex flex-col items-start space-y-4 px-6 py-4 text-gray-700'>
            <UnstyledLink href='#' className='text-gray-500 no-underline'>
              Pelatihan
            </UnstyledLink>
            <UnstyledLink href='#' className='text-gray-500 no-underline'>
              Artikel
            </UnstyledLink>
            <UnstyledLink href='#' className='text-gray-500 no-underline'>
              Tentang Kami
            </UnstyledLink>
            <UnstyledLink href='#' className='text-gray-500 no-underline'>
              Ajukan Kerjasama
            </UnstyledLink>
            <div className='flex w-full flex-col space-y-2 pt-4'>
              <Button variant='outline' href='/daftar' className='w-full'>
                Daftar
              </Button>
              <Button href='/masuk' className='w-full'>
                Masuk
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
