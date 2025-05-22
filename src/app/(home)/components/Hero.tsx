import Link from 'next/link'

const Hero = () => {
  return (
    <div className='h-[35px] bg-gradient-to-b from-gray-900 to-black text-blue-400 font-medium flex items-center px-28'>
      <Link href='/post/create' className='hover:underline transition duration-300 z-30 ease-in-out'>
        Đăng bài mới
      </Link>
    </div>
  )
}

export default Hero
