'use client'

import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='bg-gray-900 p-2.5 flex justify-between items-center'>
      <div className='flex items-center'>
        <nav className='ml-5 px-10'>
          <span className='text-white text-2xl'>VOZ</span>
          <a href='/' className='text-white mr-5 last:mr-0 hover:underline'>
            Forums
          </a>
          <a href='/whats-new' className='text-white hover:underline'>
            Latests
          </a>
        </nav>
      </div>
      <div className='flex items-center px-10'>
        <a href='/login' className='text-white mr-5 hover:underline'>
          Log in
        </a>
        <a href='/register' className='text-white hover:underline'>
          Register
        </a>
      </div>
    </header>
  )
}

export default Header
