import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'

const Page = () => {
  return (
    <div className='h-screen flex flex-col *:py-10'>
      <Hero />
      <Features />
    </div>
  )
}

export default Page
