'use client'

import { registerSchema } from '@/core/schema/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<registerSchema>({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = (data: registerSchema) => {
    console.log(data)
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
              {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor='email' className='block text-sm/6 font-medium text-gray-900'>
              Tên hiển thị
            </label>
            <div className='mt-1'>
              <input
                {...register('name')}
                placeholder='Tên hiển thị'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
              {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor='password' className='block text-sm/6 font-medium text-gray-900'>
                Mật khẩu
              </label>
            </div>
            <div className='mt-1'>
              <input
                {...register('password')}
                placeholder='********'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
              {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor='password' className='block text-sm/6 font-medium text-gray-900'>
                Xác nhận mật khẩu
              </label>
            </div>
            <div className='mt-1'>
              <input
                type='password'
                {...register('confirmPassword')}
                placeholder='********'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              />
              {errors.confirmPassword && <p className='text-red-500 text-sm mt-1'>{errors.confirmPassword.message}</p>}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Đăng ký
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
