'use client'

import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'

interface User {
  id: number
  name: string
  email: string
  createdAt: string
}

const UsersPage = () => {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users')
        setUsers(response.data)
      } catch (err: any) {
        setError(err.response?.data?.message || 'Không thể tải danh sách người dùng')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [router])

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  }

  return (
    <aside className='bg-gradient-to-b from-gray-900 to-black p-4 lg:p-6 shadow-xl min-h-screen'>
      <div className='container mx-auto px-4 lg:px-28'>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className='text-xl font-medium text-white mb-6 font-poppins'
        >
          Danh sách nhân viên
        </motion.h2>

        {loading ? (
          <div className='flex justify-center'>
            <svg
              className='animate-spin h-8 w-8 text-white'
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
          </div>
        ) : error ? (
          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
            <span className='block sm:inline'>{error}</span>
          </div>
        ) : users.length === 0 ? (
          <p className='text-gray-400 font-poppins'>Chưa có người dùng nào.</p>
        ) : (
          <ul className='space-y-3'>
            {users.map((user, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                whileHover='hover'
                className='flex flex-col lg:flex-row lg:items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg transition-colors duration-200 cursor-pointer'
              >
                <div className='flex items-center space-x-4 mb-3 lg:mb-0'>
                  <span className='text-2xl flex-shrink-0'>
                    <FaUser className='text-blue-400' />
                  </span>
                  <span className='text-base font-semibold text-white font-poppins'>{user.name}</span>
                </div>
                <div className='flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-sm text-gray-300'>
                  <div className='flex space-x-4 mb-2 lg:mb-0'>
                    <span>Email: {user.email}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <span className='text-lg flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white'>
                      👤
                    </span>
                    <span className='text-gray-200 font-medium'>{user.name}</span>
                    <span className='text-gray-400 text-xs'>{new Date(user.createdAt).toLocaleString('vi-VN')}</span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  )
}

export default UsersPage
