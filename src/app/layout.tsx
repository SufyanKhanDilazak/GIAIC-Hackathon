import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './components/Providers'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import { Footer } from './components/footer'
import { Newsletter } from './components/Newsletter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shop.co',
  description: 'Your one-stop shop for all your fashion needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Sidebar />
          {children}
        </Providers>
        <Newsletter/>
        <Footer/>
      </body>
    </html>
  )
}