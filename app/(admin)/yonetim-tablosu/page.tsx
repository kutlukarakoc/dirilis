import { Suspense } from 'react'
import { connectToDB } from '@/lib/mongoose'
import Book from '@/lib/models/books.model'
import AdminNavbar from '@/containers/yonetim-tablosu/navbar'
import ManagementTable from "@/containers/yonetim-tablosu"
import SearchBooks from "@/containers/yonetim-tablosu/search"
import ClearSearch from "@/containers/yonetim-tablosu/clear"
import Pagination from "@/components/pagination"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const metadata = {
  title: 'Diriliş Yayınları | Yönetim Tablosu',
}

const necessaryProperties = {
	title: 1, price: 1, publish: 1, isbn: 1, _id: 1, pages: 1,
}
const LIMIT = 8

async function getBooks({ searchParams }: { searchParams: { [key: string]: string } }) {
	await connectToDB()

	const { search, page } = searchParams

	if (search !== null && search !== undefined) {
		const upperCasedSearchTerm = search.toLocaleUpperCase('TR')
		const books = await Book.find({"title": new RegExp(upperCasedSearchTerm) }, necessaryProperties).limit(LIMIT).skip((+page - 1) * LIMIT).maxTimeMS(5000)
		const count = await Book.find({"title": new RegExp(upperCasedSearchTerm) }, necessaryProperties).count()
		return { books, count }
	}

	const books = await Book.find({}, necessaryProperties).limit(LIMIT).skip((+page - 1) * LIMIT).maxTimeMS(5000)
	const count = await Book.find({}, necessaryProperties).count()
	
	return { books, count }
}

export default async function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
	const { books, count } = await getBooks({ searchParams })
	const convertedBooks = books.map((book) => ({
		title: book.title,
		pages: book.pages,
		price: book.price,
		publish: {
			lastNo: book.publish.lastNo,
			firstDate: book.publish.firstDate,
			lastDate: book.publish.lastDate
		},
		isbn: book.isbn,
		_id: book._id.toString()
	}))

	const { search, page } = searchParams
	const suspenseKey = search ? search + page : 'page' + page
	
	return (
		<>
			<AdminNavbar />
				<main className="container my-20 md:my-32 flex-1 relative">
				<section>
					<div className="mb-16 flex justify-between gap-4">
						<div className="relative max-w-xl w-full">
							<SearchBooks />
							<ClearSearch />
						</div>
						<Button className="gap-2 h-11" size='lg'>
							<Plus className="cursor-pointer text-white-50" />
							Kitap Ekle
						</Button>
					</div>
					<Suspense key={suspenseKey} fallback={<h1 className="text-4xl text-center">yükleniyor...</h1>}>
						<ManagementTable books={convertedBooks} />
					</Suspense>
					{count > 6 && <Pagination count={count} limit={LIMIT} />}
				</section>
			</main>
		</>
	)
}