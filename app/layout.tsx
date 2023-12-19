import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteCongfig } from '@/config/siteConfig'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: SiteCongfig.title,
    template: '%s | ' + SiteCongfig.title,
  },
  description: SiteCongfig.description,
  icons: [
    {
      url: "/logo.svg",
      href:"/logo.svg"
    }
  ]

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
