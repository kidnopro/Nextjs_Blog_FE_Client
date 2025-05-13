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
      console.error('lỗi:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl/9  tracking-tight text-gray-900'>Đăng ký tài khoản</h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div>
            <label htmlFor='email' className='block text-sm/6 font-medium text-gray-900'>
              Địa chỉ email
            </label>
            <div className='mt-1'>
              <input
                {...register('email')}
                placeholder='Email'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
              <div className='min-h-[1.25rem] mt-1'>
                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
              </div>
            </div>
          </div>

          <div>
            <label className='block text-sm/6 font-medium text-gray-900'>Tên hiển thị</label>
            <div className='mt-1'>
              <input
                {...register('name')}
                placeholder='Tên hiển thị'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
              <div className='min-h-[1.25rem] mt-1'>
                {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
              </div>
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label className='block text-sm/6 font-medium text-gray-900'>Mật khẩu</label>
            </div>
            <div className='mt-1'>
              <input
                {...register('password')}
                type='password'
                placeholder='********'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
              <div className='min-h-[1.25rem] mt-1'>
                {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
              </div>
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label className='block text-sm/6 font-medium text-gray-900'>Xác nhận mật khẩu</label>
            </div>
            <div className='mt-1'>
              <input
                type='password'
                {...register('confirmPassword')}
                placeholder='********'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
              <div className='min-h-[1.25rem] mt-1'>
                {errors.confirmPassword && (
                  <p className='text-red-500 text-sm mt-1'>{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              {isSubmitting ? (
                <>
                  <svg
                    className='animate-spin -ml-1 mr-2 h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  Đang xử lý...
                </>
              ) : (
                'Đăng ký'
              )}
            </button>
          </div>
        </form>

        <div className='mt-10 flex justify-between items-center text-sm text-gray-500 '>
          <Link href='/forgotpassw' className='font-semibold text-indigo-600 hover:underline'>
            Quên mật khẩu?
          </Link>
          <a href='/login' className='font-semibold text-indigo-600 hover:underline'>
            Đăng nhập tài khoản
          </a>
        </div>
      </div>
    </div>
  )
}
