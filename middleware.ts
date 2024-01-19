import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: '/giris',
  },
	secret: process.env.NEXTAUTH_SECRET
})

export const config = { matcher: ["/yonetim-tablosu"] }
