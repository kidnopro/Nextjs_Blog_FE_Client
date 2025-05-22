'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  const linkVariants = {
    hover: { y: -3, transition: { duration: 0.2 } }
  }

  return (
    <footer className='bg-gradient-to-t from-gray-900 to-black text-gray-200'>
      <div className='container mx-auto px-4 py-8 lg:px-28'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
          <div className='flex flex-col items-center lg:items-start'>
            <p className='text-sm font-poppins text-gray-400 text-center lg:text-left flex'>
              © {new Date().getFullYear()}. Được ctrl C & V bởi{' '}
              <motion.span
                variants={linkVariants}
                whileHover='hover'
                className='text-blue-400 hover:text-blue-300 transition-colors ml-1'
              >
                Hoàng Em
              </motion.span>
              <div className='ml-1'>em của anh</div>
              <motion.span
                variants={linkVariants}
                whileHover='hover'
                className='text-blue-400 hover:text-blue-300 transition-colors ml-1'
              >
                Hoàng Anh
              </motion.span>
            </p>
          </div>

          <div className='flex space-x-6'>
            <motion.a
              href='https:/github.com/kidnopro'
              target='_blank'
              rel='noopener noreferrer'
              variants={linkVariants}
              whileHover='hover'
              aria-label='GitHub'
              className='text-gray-300 hover:text-blue-400 transition-colors'
            >
              <FaGithub size={24} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
