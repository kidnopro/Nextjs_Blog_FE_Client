import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

// Cấu hình font chữ Poppins
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    template: '%s - Kid chát chít',
    default: 'Kid chát chít'
  },
  description: 'KidBlog chát chít là một nền tảng xã hội, giúp bạn tìm kiếm bạn đời',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
