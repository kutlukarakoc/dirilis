import Login from '@/containers/giris'
// import { redirect } from 'next/navigation'
// import { getCurrentUser } from '@/lib/session'

export const metadata = {
  title: 'Diriliş Yayınları | Giriş',
}

export default async function LoginPage() {
	// const user = await getCurrentUser()

	// if(user?.email) {
	// 	redirect('/yonetim-tablosu?page=1')
	// }

  return <Login />
}
