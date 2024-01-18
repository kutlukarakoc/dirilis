import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'
import { NextApiHandler } from 'next'

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, authOptions)

export { authHandler as GET, authHandler as POST }
