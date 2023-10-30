import { Book } from '@/types/books'
// import { Metadata } from 'next'
import DetailContainer from '@/containers/kitap'
import BooksSchema from '@/lib/models/books.model'

async function getBookById(id: string) {
	const book = await BooksSchema.findById(id).maxTimeMS(5000)
	const formattedBook = JSON.parse(JSON.stringify(book))
	return formattedBook
}

// export async function generateMetadata({
//   params: { slug },
// }: {
//   params: { slug: string }
// }): Promise<Metadata> {
//   const bookId = slug.split('_')[1]

//   const book = await getBookById(bookId)
//   const bookTitle = book.title
//   const prefix = 'Diriliş Yayınları'

//   return {
//     title: bookTitle ? prefix + ' | ' + bookTitle : prefix,
//   }
// }

export default async function Book({
  params: { slug },
}: {
  params: { slug: string }
}) {
	const bookId = slug.split('_')[1]
	let book: any = {}
	try {
		book = await getBookById(bookId)
		return <DetailContainer book={book} />
	} catch (error) {
		console.log('error', error)
	}
	return <div>book</div>
}
