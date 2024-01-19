import { Toaster } from '@/components/ui/toaster'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
	console.log('process.env.NEXTAUTH_SECRET', process.env.NEXTAUTH_SECRET)	
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
