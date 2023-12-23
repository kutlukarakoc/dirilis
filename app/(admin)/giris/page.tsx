import Login from '@/containers/giris'
import AlreadyLoggedIn from '@/containers/giris/already-loggedin'
import { getServerSession } from 'next-auth'

export const metadata = {
  title: 'Diriliş Yayınları | Giriş',
}

export default async function Page() {
  const session = await getServerSession()

  return session ? <AlreadyLoggedIn /> : <Login />
}
