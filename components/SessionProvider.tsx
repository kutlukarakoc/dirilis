'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'

type SessionContextProps = {
  children: React.ReactNode
}
export default function SessionContext({ children }: SessionContextProps) {
  return <SessionProvider>{children}</SessionProvider>
}
