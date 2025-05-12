'use client'

import React from 'react'

export default function Header() {
  return (
    <header>
      <div className='bg-gray-900 p-2.5 flex justify-between items-center'>
        <div className='flex items-center'>
          <nav className='ml-5 px-10'>
            <a href='/' className='text-white text-3xl'>
              VOZ
            </a>

            <a href='/' className='text-white mr-5 ml-5 last:mr-0 hover:text-red-500 transition duration-200'>
              Forums
            </a>
            <a href='/whats-new' className='text-white hover:text-red-500 transition duration-200'>
              Latests
            </a>
          </nav>
        </div>
        <div className='flex items-center px-10'>
          <a href='/login' className='text-white mr-5 hover:text-red-500 transition duration-200'>
            Log in
          </a>
          <a href='/register' className='text-white hover:text-red-500 transition duration-200'>
            Register
          </a>
        </div>
      </div>
    </header>
  )
}
