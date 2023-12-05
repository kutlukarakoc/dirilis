'use client'

import Logo from "@/components/logo"
import { signOut } from "next-auth/react"

const AdminNavbar = () => {
	return (
		<div className="h-20 flex justify-between items-center px-16 bg-primary-900 -mb-8">
			<Logo size='md' />
			<button className="text-white-50" onClick={() => signOut()}>Çıkış yap</button>
		</div>
	)
}

export default AdminNavbar