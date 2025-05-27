import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
// Import Navbar and Footer components once they are created
import Navbar from '@/components/layout/Navbar' 
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', // CSS variable for Inter
  display: 'swap',
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair-display', // CSS variable for Playfair Display
  weight: ['400', '700'], // Specify weights you will use
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cetin Aslan Danismanlik - Italy', // Default title
  description: 'Your trusted partner for studying in Italy. Housing, scholarships, permits, and more.',
  // Add other default metadata here (e.g., icons, openGraph)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 