'use client'

import React from 'react'
import { FaBell, FaCommentDots, FaNewspaper, FaStar, FaBook } from 'react-icons/fa'

const Computer = () => {
  const categories = [
    {
      name: 'Thông báo',
      icon: <FaBell className='text-blue-400' />,
      threads: 19,
      messages: 46,
      user: 'rZzy',
      time: 'Mar 29, 2025',
      avatar: '👤'
    },
    {
      name: 'Góp ý',
      icon: <FaCommentDots className='text-orange-400' />,
      threads: '3.3K',
      messages: '67.7K',
      user: 'A đã nói k sao',
      time: 'Today at 8:18 AM',
      avatar: '😊'
    },
    {
      name: 'Tin tức iNet',
      icon: <FaNewspaper className='text-green-400' />,
      threads: '1K+',
      messages: '79.9K',
      user: 'Newbieeee',
      time: 'Today at 9:40 AM',
      avatar: '🐣'
    },
    {
      name: 'Review sản phẩm',
      icon: <FaStar className='text-yellow-400' />,
      threads: '1K+',
      messages: '144.6K',
      user: 'sherlockkid',
      time: 'Today at 9:41 AM',
      avatar: '🍁'
    },
    {
      name: 'Chia sẻ kiến thức',
      icon: <FaBook className='text-purple-400' />,
      threads: '1K+',
      messages: '126.2K',
      user: 'Motbannam',
      time: 'Today at 9:35 AM',
      avatar: '🌲'
    }
  ]

  return (
    <aside className='w-full bg-black p-4 shadow-lg px-28 '>
      <h2 className='text-xl font-semibold text-blue-700 mb-4'>Máy tính</h2>
      <ul className='space-y-2'>
        {categories.map((category, index) => (
          <li
            key={index}
            className='flex items-center justify-between p-2 hover:bg-gray-700 rounded-md transition-colors duration-200'
          >
            <div className='flex items-center space-x-3'>
              <span className='text-2xl'>{category.icon}</span>
              <span className='text-sm font-medium text-white'>{category.name}</span>
            </div>
            <div className='flex items-center space-x-4 text-xs text-white'>
              <span>Threads: {category.threads}</span>
              <span>Messages: {category.messages}</span>
              <div className='flex items-center space-x-2'>
                <span className='text-lg flex items-center w-8 h-8 rounded-full bg-gray-300'>{category.avatar}</span>
                <span className='text-gray-500'>{category.user}</span>
                <span className='text-gray-400'>{category.time}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Computer
