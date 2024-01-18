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
import { ChevronDown, User } from 'lucide-react'
import { externalNavLinks } from '@/constants/externalLinks'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { UserMail } from '@/types/userMail'

const Desktop = ({ email }: UserMail) => {
  const pathname = usePathname()

  const [value, setValue] = useState('')

  return (
    <Menubar
      className="hidden space-x-8 xl:flex 2xl:space-x-10"
      value={value}
      onValueChange={setValue}
    >
      <Link
        role="link"
        href="/"
        className={`nav-link ${pathname === '/' ? '!text-white-50' : ''}`}
      >
        Anasayfa
      </Link>
      <MenubarMenu>
        <MenubarTrigger
          className={`nav-link ${
            pathname.includes('/tarihce') || pathname.includes('/biyografi')
              ? '!text-white-50'
              : ''
          }`}
        >
          Hakkımızda <ChevronDown className="ml-1.5" />
        </MenubarTrigger>
        <MenubarContent align="center">
          <MenubarItem onClick={() => setValue('')}>
            <Link
              role="link"
              href="/tarihce"
              className="h-full w-full px-2 py-1.5"
            >
              Tarihçe
            </Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem onClick={() => setValue('')}>
            <Link
              role="link"
              href="/biyografi"
              className="h-full w-full px-2 py-1.5"
            >
              Biyografi
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <Link
        role="link"
        href="/kitap-listesi?page=1"
        className={`nav-link ${
          pathname.includes('/kitap-listesi') ? '!text-white-50' : ''
        }`}
      >
        Kitap Listesi
      </Link>
      <Link
        role="link"
        href="/fiyat-listesi?page=1"
        className={`nav-link ${
          pathname.includes('/fiyat-listesi') ? '!text-white-50' : ''
        }`}
      >
        Fiyat Listesi
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
                  role="link"
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
        role="link"
        href="/iletisim"
        className={`nav-link ${
          pathname.includes('/iletisim') ? '!text-white-50' : ''
        }`}
      >
        İletişim
      </Link>
      {email && (
        <MenubarMenu>
          <MenubarTrigger className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100">
            <User
              size={20}
              className="text-black-700"
            />
          </MenubarTrigger>
          <MenubarContent align="center">
            <MenubarItem>
              <p className="h-full w-full px-2 py-1.5">{email}</p>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link
                href="/yonetim-tablosu"
                className="h-full w-full px-2 py-1.5"
              >
                Yönetim Tablosu
              </Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <p
                className="h-full w-full cursor-pointer px-2 py-1.5"
                onClick={() => signOut()}
              >
                Çıkış Yap
              </p>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      )}
    </Menubar>
  )
}

export default Desktop
