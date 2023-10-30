import ListingContainer from '@/containers/kitap-listesi'
import Book from '@/lib/models/books.model'

export const metadata = {
  title: 'Diriliş Yayınları | Kitap Listesi',
}

export default async function Books() {
	let books = []

	try {
		books = await Book.find().maxTimeMS(5000)
	} catch (error) {
		console.log('error', error)
	}

	const simplifiedBooks: any = books.map((book) => ({
		title: book.title,
		id: book._id,
		price: book.price,
		category: book.category,
		imageUrl: book.imageUrl,
	}))
	
  return <ListingContainer books={simplifiedBooks} />
}
