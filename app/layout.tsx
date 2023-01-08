import React, { ReactNode } from 'react'
import Link from 'next/link'
import { AnalyticsWrapper } from 'app/analytics'
import Header from 'components/Header'
import 'styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="text-black bg-white dark:bg-black dark:text-white">
        <Header />
        <main className="container mx-auto px-4">
          {children}
        </main>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}