import type { Metadata } from 'next'
import { Average } from 'next/font/google'
import './globals.css'

const inter = Average({ subsets: ['latin'], weight: '400' })

const title = 'loukhin.com'
const description = 'homepage of endless nothingness'
const thumbnail = `${process.env.NEXT_PUBLIC_HOST}/icon.png`

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: thumbnail,
  },
  twitter: {
    title: title,
    description: description,
    images: thumbnail,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <script
          defer
          src='https://umami.loukhin.com/script.js'
          data-website-id='0e67edb6-f9c1-46d6-81c5-68ad3b82d872'
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
