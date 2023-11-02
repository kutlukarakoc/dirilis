'use client'

import { useState, Fragment } from 'react'
import Link from 'next/link'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { ChevronDown } from 'lucide-react'
import { externalNavLinks } from '@/constants/externalLinks'
import { usePathname } from 'next/navigation'

const Desktop = () => {
  const pathname = usePathname()

  const [value, setValue] = useState('')

  return (
    <Menubar
      className="hidden space-x-8 lg:flex 2xl:space-x-10"
      value={value}
      onValueChange={setValue}
    >
      <Link
        href="/"
        className={`nav-link ${pathname === '/' ? 'text-white-50' : ''}`}
      >
        Anasayfa
      </Link>
      <MenubarMenu>
        <MenubarTrigger
          className={`nav-link ${
            pathname === '/tarihce' || pathname.includes('/biyografi')
              ? 'text-white-50'
              : ''
          }`}
        >
          Hakkımızda <ChevronDown className="ml-1.5" />
        </MenubarTrigger>
        <MenubarContent align="center">
          <MenubarItem onClick={() => setValue('')}>
            <Link
              href="/tarihce"
              className="h-full w-full px-2 py-1.5"
            >
              Tarihçe
            </Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem onClick={() => setValue('')}>
            <Link
              href="/biyografi"
              className="h-full w-full px-2 py-1.5"
            >
              Biyografi
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <Link
        href="/kitap-listesi?page=1"
        className={`nav-link ${
          pathname.includes('/kitap-listesi') ? 'text-white-50' : ''
        }`}
      >
        Kitap Listesi
      </Link>
      <MenubarMenu>
        <MenubarTrigger>
          Diğer Sitelerimiz <ChevronDown className="ml-1.5" />
        </MenubarTrigger>
        <MenubarContent align="center">
          {externalNavLinks.map((item, index) => (
            <Fragment key={item.title}>
              <MenubarItem>
                <a
                  href={item.url}
                  target="_blank"
                  className="h-full w-full px-2 py-1.5"
                >
                  {item.title}
                </a>
              </MenubarItem>
              {index !== externalNavLinks.length - 1 && <MenubarSeparator />}
            </Fragment>
          ))}
        </MenubarContent>
      </MenubarMenu>
      <Link
        href="/iletisim"
        className={`nav-link ${
          pathname === '/iletisim' ? 'text-white-50' : ''
        }`}
      >
        İletişim
      </Link>
    </Menubar>
  )
}

export default Desktop
