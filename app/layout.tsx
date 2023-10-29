import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Indie_Flower } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] });
const indie = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-indie'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className={indie.className}>
      <body>{children}
      
      
      </body>
    </html>
  )
}