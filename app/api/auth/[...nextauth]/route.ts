import Admin from '@/lib/models/admins.model'
import { connectToDB } from '@/lib/mongoose'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 21600,
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        await connectToDB()

        try {
          const { email, password } = credentials as {
            email: string
            password: string
          }

          const user = await Admin.findOne({ email })
          if (!user) throw Error('Geçersiz email.')

          const passwordMatch = await bcrypt.compare(password, user.password)
          if (!passwordMatch) throw Error('Geçersiz şifre.')

          return {
            email: user.email,
            id: user._id,
          }
        } catch (error: any) {
          throw Error(error)
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user?.email) {
        token.email = user.email
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string
        (session.user as { email: string }).email = token.email as string
      }
      return session
    },
  },
  pages: {
    signIn: '/giris',
  },
}

const authHandler = NextAuth(authOptions)

export { authHandler as GET, authHandler as POST }
