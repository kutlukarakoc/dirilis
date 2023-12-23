import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="container relative my-20 flex-1 md:my-32">
        {children}
      </main>
      <Footer />
    </>
  )
}
