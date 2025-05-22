'use client'

import { registerSchema } from '@/core/schema/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<registerSchema>({
    resolver: zodResolver(registerSchema)
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: registerSchema) => {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('Form data:', data)
    } catch (error) {
      console.error('Lỗi:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className=' flex flex-col justify-center bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='text-center text-3xl font-semibold text-white '>Đăng ký tài khoản</h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700 '>
                Họ tên
              </label>
              <div className='mt-1 relative'>
                <input
                  id='name'
                  {...register('name')}
                  placeholder='Nhập tên hiển thị'
                  disabled={isSubmitting}
                  className={`block w-full px-4 py-3 rounded-md border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm  transition-all duration-200`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby='name-error'
                />
                {errors.name && (
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                    <svg className='h-5 w-5 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                )}
              </div>
              {errors.name && (
                <p className='mt-2 text-sm text-red-600 ' id='name-error'>
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 '>
                Địa chỉ Email
              </label>
              <div className='mt-1 relative'>
                <input
                  id='email'
                  {...register('email')}
                  placeholder='Nhập email của bạn'
                  disabled={isSubmitting}
                  className={`block w-full px-4 py-3 rounded-md border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm  transition-all duration-200`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby='email-error'
                />
                {errors.email && (
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                    <svg className='h-5 w-5 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                )}
              </div>
              {errors.email && (
                <p className='mt-2 text-sm text-red-600 ' id='email-error'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 font-poppins'>
                Mật khẩu
              </label>
              <div className='mt-1 relative'>
                <input
                  id='password'
                  {...register('password')}
                  type='password'
                  placeholder='Nhập mật khẩu'
                  disabled={isSubmitting}
                  className={`block w-full px-4 py-3 rounded-md border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm font-poppins transition-all duration-200`}
                  aria-invalid={errors.password ? 'true' : 'false'}
                  aria-describedby='password-error'
                />
                {errors.password && (
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                    <svg className='h-5 w-5 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                )}
              </div>
              {errors.password && (
                <p className='mt-2 text-sm text-red-600 font-poppins' id='password-error'>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* <div>
              <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 font-poppins'>
                Xác nhận mật khẩu
              </label>
              <div className='mt-1 relative'>
                <input
                  id='confirmPassword'
                  {...register('confirmPassword')}
                  type='password'
                  placeholder='Nhập lại mật khẩu'
                  disabled={isSubmitting}
                  className={`block w-full px-4 py-3 rounded-md border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  } bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm font-poppins transition-all duration-200`}
                  aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                  aria-describedby='confirmPassword-error'
                />
                {errors.confirmPassword && (
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                    <svg className='h-5 w-5 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                )}
              </div> */}
            {/* {errors.confirmPassword && (
                <p className='mt-2 text-sm text-red-600 font-poppins' id='confirmPassword-error'>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div> */}

            <div>
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-poppins transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? (
                  <div className='flex items-center'>
                    <svg
                      className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      />
                    </svg>
                    Đang xử lý...
                  </div>
                ) : (
                  'Đăng ký'
                )}
              </button>
            </div>
          </form>

          <div className='mt-6 flex justify-between items-center text-sm'>
            <Link
              href='/forgotpassw'
              className='font-medium text-indigo-600 hover:text-indigo-500 font-poppins transition-colors duration-200'
            >
              Quên mật khẩu?
            </Link>
            <Link
              href='/login'
              className='font-medium text-indigo-600 hover:text-indigo-500 font-poppins transition-colors duration-200'
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
