export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
		<main className="container my-20 md:my-32 flex-1 relative">
			{children}
		</main>
	)
}
