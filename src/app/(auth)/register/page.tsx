'use client'

import Link from 'next/link'

export default function Register() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl/9  tracking-tight text-gray-900'>Register an account</h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form action='#' method='POST' className='space-y-6'>
          <div>
            <label htmlFor='email' className='block text-sm/6 font-medium text-gray-900'>
              Email address
            </label>
            <div className='mt-1'>
              <input
                id='email'
                name='email'
                placeholder='Email'
                type='email'
                required
                autoComplete='email'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor='password' className='block text-sm/6 font-medium text-gray-900'>
                Password
              </label>
            </div>
            <div className='mt-1'>
              <input
                id='password'
                name='password'
                type='password'
                placeholder='********'
                required
                autoComplete='current-password'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor='password' className='block text-sm/6 font-medium text-gray-900'>
                Confirm Password
              </label>
            </div>
            <div className='mt-1'>
              <input
                id='confirm_password'
                name='confirm_password'
                type='password'
                placeholder='********'
                required
                autoComplete='current-password'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign in
            </button>
          </div>
        </form>

        <div className='mt-10 flex justify-between items-center text-sm text-gray-500 '>
          <Link href='/forgotpassw' className='font-semibold text-indigo-600 hover:underline'>
            Forgot password?
          </Link>
          <a href='/login' className='font-semibold text-indigo-600 hover:underline'>
            Login now
          </a>
        </div>
      </div>
    </div>
  )
}
