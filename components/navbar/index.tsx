import Mobile from './mobile'
import Desktop from './desktop'
import Logo from '../logo'

const Navbar = () => {
  return (
    <nav className="flex h-16 items-center bg-primary-900 xl:h-28">
      <div className="flex w-full items-center justify-between px-4 sm:px-8">
        <Logo size="lg" />
        <Desktop />
        <Mobile />
      </div>
    </nav>
  )
}

export default Navbar
