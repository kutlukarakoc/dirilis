import Filter from '@/containers/kitap-listesi/filter'
import BookList from '@/containers/kitap-listesi/books'
import BooksLoading from '@/containers/kitap-listesi/books/loading'
import Pagination from '@/components/pagination'
import Book from '@/lib/models/books.model'
import { connectToDB } from '@/lib/mongoose'
import { Suspense } from 'react'

export const metadata = {
  title: 'Diriliş Yayınları | Kitap Listesi',
}

const necessaryProperties = {
	title: 1, price: 1, category: 1, imageUrl: 1, _id: 1
}
const LIMIT = 12

async function getBooks({ searchParams }: { searchParams: { [key: string]: string } }) {
	await connectToDB()

	const { category, search, page } = searchParams
	
	if(category !== null && category !== undefined) {
		const categoryId = category.split('-').at(-1)
		const books = await Book.find({'category.id': categoryId}, necessaryProperties).limit(LIMIT).skip((+page - 1) * LIMIT).maxTimeMS(5000)
		const count = await Book.find({'category.id': categoryId}, necessaryProperties).count()
		
		return {books, count}
	}

	if(search !== null && search !== undefined) {
		const upperCasedSearchTerm = search.toLocaleUpperCase('TR')
		const books = await Book.find({"title": new RegExp(upperCasedSearchTerm) }, necessaryProperties).limit(LIMIT).skip((+page - 1) * LIMIT).maxTimeMS(5000)
		const count = await Book.find({"title": new RegExp(upperCasedSearchTerm) }, necessaryProperties).count()
		return {books, count}
	}

	const books = await Book.find({}, {title: 1, price: 1, category: 1, imageUrl: 1, _id: 1}).limit(LIMIT).skip((+page - 1) * LIMIT).maxTimeMS(5000)
	const count = await Book.find({}, {title: 1, price: 1, category: 1, imageUrl: 1, _id: 1}).count()
	
	return {books, count}
}

export default async function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
	const {books, count} = await getBooks({ searchParams })

	const { category, search, page } = searchParams
	const suspenseKey = category ? category + page : search ? search + page : 'page' + page
	
	return (
		<>
			<Filter />
			<Suspense key={suspenseKey} fallback={<BooksLoading />}>
				<BookList books={books} />
			</Suspense>
			{count > LIMIT && <Pagination count={count} limit={LIMIT} />}
		</>
	)
}
