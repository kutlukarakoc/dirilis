import ListingContainer from '@/containers/kitap-listesi'
import Book from '@/lib/models/books.model'
import { connectToDB } from '@/lib/mongoose'

export const metadata = {
  title: 'Diriliş Yayınları | Kitap Listesi',
}

async function getBooks() {
	await connectToDB()	
	const books = await Book.find({}, {title: 1, price: 1, category: 1, imageUrl: 1, _id: 1}).maxTimeMS(5000)
	return books
}

export default async function Books({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
	console.log('searchParams', searchParams)
	const books = await getBooks()
	
  return <ListingContainer books={books} />
}
