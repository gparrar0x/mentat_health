import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Phoenix Dashboard - Health & Fitness Tracker',
  description: 'Dashboard personalizado para seguimiento de salud, fitness y hábitos',
  keywords: ['dashboard', 'health', 'fitness', 'tracking', 'phoenix'],
  authors: [{ name: 'Phoenix Dashboard' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} antialiased bg-phoenix-bg text-phoenix-text`}>
        {children}
      </body>
    </html>
  )
}
