import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learn Portuguese — from day one',
  description: 'Portuguese classes for Americans building a life in Portugal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
