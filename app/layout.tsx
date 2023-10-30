import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const alata = localFont({
  src: './fonts/alata/alata.ttf',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className="container my-20 md:my-32 flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
