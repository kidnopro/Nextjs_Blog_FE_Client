'use client'

export default function NotFound() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-7xl font-bold text-red-500'>404</h1>
        <p className='text-gray-500 mt-2 text-2xl'>Lỗi, thông tin bạn tìm kiếm không tồn tại.</p>
        <a
          href='/'
          className='mt-6 inline-block px-4 py-2 bg-[#3C0061] text-white rounded hover:bg-[#2A0043] transition-colors'
        >
          Về trang chủ
        </a>
      </div>
    </div>
  )
}
