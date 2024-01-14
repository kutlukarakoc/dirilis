// import { getServerSession } from 'next-auth'
// import SessionProvider from '@/components/SessionProvider'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const alata = localFont({
  src: './fonts/alata/alata.ttf',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const session = await getServerSession()

  return (
    <html lang="tr">
      <body className={roboto.className}>
        {/* <SessionProvider session={session}>{children}</SessionProvider> */}
				{children}
      </body>
    </html>
  )
}
