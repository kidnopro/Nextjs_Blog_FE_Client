'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AuroraText } from '@/components/magicui/aurora-text'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: '/login', label: 'Đăng nhập' },
    { href: '/register', label: 'Đăng ký' }
  ]

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeIn' }
    }
  }

  return (
    <header className='bg-gradient-to-b from-gray-900 to-black p-4 lg:px-28 sticky top-0 z-50 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-white text-2xl font-extrabold font-poppins tracking-tight'>
          <motion.span whileHover={{ scale: 1.05 }} className=''>
            Code{' '}
            <i>
              <AuroraText> Farm</AuroraText>
            </i>
          </motion.span>
        </Link>

        <button
          className='lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2'
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
        >
          <svg
            className='w-7 h-7'
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
            />
          </svg>
        </button>

        <nav className='hidden lg:flex items-center space-x-8'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-poppins text-base font-medium transition-all duration-300 ${
                pathname === item.href
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-200 hover:text-blue-400 hover:border-b-2 hover:border-blue-400'
              } py-2 px-1`}
            >
              <motion.span whileHover={{ y: -2 }}>{item.label}</motion.span>
            </Link>
          ))}
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial='closed'
              animate='open'
              exit='closed'
              variants={menuVariants}
              className='lg:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-xl mt-2 mx-4 rounded-lg p-4'
            >
              <div className='flex flex-col space-y-3'>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className={`font-poppins text-base font-medium py-2 px-3 rounded-md transition-all duration-200 ${
                      pathname === item.href
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-200 hover:bg-gray-800 hover:text-blue-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
