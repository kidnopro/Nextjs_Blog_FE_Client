'use client'
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='bg-gray-900 text-white flex items-center justify-center h-[50px]'>
        <div className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            //   class='lucide lucide-at-sign-icon lucide-at-sign'
          >
            <circle cx='12' cy='12' r='4' />
            <path d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8' />
          </svg>
          <span className='ml-1 hover:text-blue-500 transition'>Made by Hoang Em, em cua Hoang Anh =)))</span>
        </div>
      </div>
    </footer>
  )
}
