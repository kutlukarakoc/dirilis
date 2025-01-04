import Link from 'next/link'
import Logo from './logo'
import { footerLinks } from '@/constants/footerLinks'

interface LinkProps {
  url: string
  title: string
}

const FooterLink = ({ url, title }: LinkProps) => (
  <Link
    href={url}
    className="text-label text-primary-300 md:text-paragraph-mobile"
    role="link"
  >
    {title}
  </Link>
)

const Footer = () => {
  return (
    <footer className="h-72 bg-primary-900 md:h-80">
      <div className="container mb-0 flex h-[16.5rem] flex-col items-center justify-center space-y-8 px-2 md:mb-1 md:h-72 md:justify-between md:px-4 lg:flex-row lg:space-y-0 lg:px-8">
        <Logo
          size="md"
          className="mt-3 md:mt-0"
        />
        <div className="flex w-full max-w-xs flex-1 flex-wrap justify-between px-4 text-center sm:max-w-sm sm:px-0">
          {footerLinks.map((item) => (
            <div key={item.title}>
              <h6 className="mx-auto mb-6 w-max border-b border-primary-700 pb-1.5 text-paragraph-mobile text-primary-100 md:text-header-6">
                {item.title}
              </h6>
              <div className="flex flex-col space-y-3">
                {item.links.map((subLink) => {
                  return item.external ? (
                    <a
                      key={subLink.title}
                      href={subLink.url}
                      rel="noopener noreferrer"
                      className="text-label text-primary-300 md:text-paragraph-mobile"
                    >
                      {subLink.title}
                    </a>
                  ) : (
                    <FooterLink
                      key={subLink.title}
                      url={subLink.url}
                      title={subLink.title}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-3 text-center text-smaller text-primary-200 lg:text-label">
        © 2025 Diriliş Yayınları, Tüm Hakları Saklıdır
      </div>
    </footer>
  )
}

export default Footer
