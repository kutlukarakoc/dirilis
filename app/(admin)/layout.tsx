import { Toaster } from '@/components/ui/toaster'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
	console.log('process.env.NEXTAUTH_SECRET', process.env.NEXTAUTH_SECRET)	
	console.log('process.env.MONGODB_URI', process.env.MONGODB_URI)	
	console.log('process.env.NEXTAUTH_URL', process.env.NEXTAUTH_URL)	
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
