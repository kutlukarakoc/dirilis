import type { NextAuthOptions } from 'next-auth'
import Admin from '@/lib/models/admins.model'
import { connectToDB } from '@/lib/mongoose'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
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

          const passwordMatch = await bcrypt.compare(password, user?.password)
          if (!passwordMatch) throw Error('Geçersiz şifre.')

          delete user.password

          console.log('kullanıcı bulundu')
          return {
            email: user?.email,
            id: user?._id,
          }
        } catch (error: any) {
          console.log('auth.ts authorize hatası', error)
          throw Error(error)
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.email) {
        token.email = user?.email
        token.id = user?.id
      }
			console.log('callback jwt', token)
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as { id: string }).id = token?.id as string
        (session.user as { email: string }).email = token?.email as string
      }
			console.log('callback session', session)
      return session
    },
  },
  pages: {
    signIn: '/giris',
  },
}
