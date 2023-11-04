import ListingContainer from '@/containers/kitap-listesi'
import Book from '@/lib/models/books.model'
import { connectToDB } from '@/lib/mongoose'

export const metadata = {
  title: 'Diriliş Yayınları | Kitap Listesi',
}

const necessaryProperties = {
	title: 1, price: 1, category: 1, imageUrl: 1, _id: 1
}
const LIMIT = 12

async function getBooks({ searchParams }: { searchParams: { [key: string]: string } }) {
	await connectToDB()

	const { category, search, page }= searchParams
	
	if(category !== null && category !== undefined) {
		const categoryId = category.split('-').at(-1)
		const books = await Book.find({'category.id': categoryId}, necessaryProperties).limit(12).skip((+page - 1) * LIMIT).maxTimeMS(5000)
		const count = await Book.find({'category.id': categoryId}, necessaryProperties).count()
		
		return {books, count}
	}

	if(search !== null && search !== undefined) {
		const upperCasedSearchTerm = search.toLocaleUpperCase('TR')
		const books = await Book.find({"title": new RegExp(upperCasedSearchTerm) }, necessaryProperties).limit(12).skip((+page - 1) * LIMIT).maxTimeMS(5000)
		const count = await Book.find({"title": new RegExp(upperCasedSearchTerm) }, necessaryProperties).count()
		return {books, count}
	}

	const books = await Book.find({}, {title: 1, price: 1, category: 1, imageUrl: 1, _id: 1}).limit(12).skip((+page - 1) * LIMIT).maxTimeMS(5000)
	const count = await Book.find({}, {title: 1, price: 1, category: 1, imageUrl: 1, _id: 1}).count()
	
	return {books, count}
}

export default async function Books({ searchParams }: { searchParams: { [key: string]: string } }) {
	const {books, count} = await getBooks({ searchParams })
	
	return <ListingContainer books={books.length > 0 ? books : []} count={count}/>
}
