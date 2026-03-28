import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FACO Syndicate - Grand Mobile RP Alliance',
  description: 'Official website of FACO Syndicate, a premier alliance for GrandMobile RP with 20+ families united in excellence.',
  openGraph: {
    title: 'FACO Syndicate - Grand Mobile RP Alliance',
    description: 'Official website of FACO Syndicate, a premier alliance for GrandMobile RP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
