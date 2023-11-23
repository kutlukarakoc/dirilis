import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
		<>
			<Navbar />
			<main className="container my-20 md:my-32 flex-1 relative">
				{children}
			</main>
			<Footer />
		</>
  )
}
