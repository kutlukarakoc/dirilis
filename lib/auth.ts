import type { NextAuthOptions } from 'next-auth'
import Admin from '@/lib/models/admins.model'
import { connectToDB } from '@/lib/mongoose'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { loginSchema } from './schemas/loginSchema'

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
        const validatedFields = loginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          await connectToDB()

          const user = await Admin.findOne({ email })
          if (!user || !user.password) return null

          const passwordsMatch = await bcrypt.compare(password, user.password)

          delete user.password

          if (passwordsMatch) return user
        }

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.email) {
        token.email = user?.email
        token.id = user?.id
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as { id: string }).id = token?.id as string
        (session.user as { email: string }).email = token?.email as string
      }
      return session
    },
  },
  pages: {
    signIn: '/giris',
  },
}
