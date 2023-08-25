import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={jost.className}>{children}</body>
    </html>
  )
}
