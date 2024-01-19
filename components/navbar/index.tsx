import Mobile from './mobile'
import Desktop from './desktop'
import Logo from '../logo'
import { getCurrentUser } from '@/lib/session'

const Navbar = async () => {
  const user = await getCurrentUser()

  return (
    <nav className="flex h-16 items-center bg-primary-900 xl:h-28">
      <div className="flex w-full items-center justify-between px-4 sm:px-10">
        <Logo size="lg" />
        <Desktop email={user?.email} />
        <Mobile email={user?.email} />
      </div>
    </nav>
  )
}

export default Navbar
