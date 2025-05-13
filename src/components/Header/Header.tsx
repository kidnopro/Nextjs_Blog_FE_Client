'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='bg-gray-900 p-3.5 px-12'>
      <div className='container mx-auto flex justify-between items-center flex-wrap'>
        <Link href='/' className='text-white text-3xl font-bold font-poppins'>
          VOZ
        </Link>

        <button className='sm:hidden text-white focus:outline-none' onClick={toggleMenu}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        <nav
          className={`w-full sm:w-auto sm:flex sm:items-center ${
            isMenuOpen ? 'block' : 'hidden'
          } sm:block mt-2 sm:mt-0`}
        >
          <div className='flex flex-col sm:flex-row sm:space-x-5 space-y-2 sm:space-y-0'>
            <Link
              href='/'
              className={`font-poppins text-base ${
                pathname === '/' ? 'text-blue-500 ' : 'text-white'
              } hover:text-blue-500 transition duration-200`}
            >
              Diễn đàn
            </Link>
            <Link
              href='/whats-new'
              className={`font-poppins text-base ${
                pathname === '/whats-new' ? 'text-blue-500 ' : 'text-white'
              } hover:text-blue-500 transition duration-200`}
            >
              Tin mới
            </Link>
            <Link
              href='/login'
              className={`font-poppins text-base ${
                pathname === '/login' ? 'text-blue-500 ' : 'text-white'
              } hover:text-blue-500 transition duration-200`}
            >
              Đăng nhập
            </Link>
            <Link
              href='/register'
              className={`font-poppins text-base ${
                pathname === '/register' ? 'text-blue-500 ' : 'text-white'
              } hover:text-blue-500 transition duration-200`}
            >
              Đăng ký
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
