'use client'

import Logo from '@/components/logo'
import { signOut } from 'next-auth/react'

const AdminNavbar = () => {
  return (
    <div className="-mb-8 flex h-20 items-center justify-between bg-primary-900 px-2 sm:px-16">
      <Logo size="md" />
      <button
        className="text-white-50"
        onClick={() => signOut()}
      >
        Çıkış yap
      </button>
    </div>
  )
}

export default AdminNavbar
