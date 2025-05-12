import Header from './components/Header/Header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={poppins.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
