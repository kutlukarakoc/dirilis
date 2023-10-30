import { Book } from '@/types/books'
import { Metadata } from 'next'
import DetailContainer from '@/containers/kitap'
import BooksSchema from '@/lib/models/books.model'
import { connectToDB } from '@/lib/mongoose'

async function getBookById(id: string) {
	await connectToDB()
	const book = await BooksSchema.findOne({_id: id}).maxTimeMS(5000)
	const formattedBook = JSON.parse(JSON.stringify(book))
	return formattedBook
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const bookId = slug.split('_')[1]

  const book = await getBookById(bookId)
  const bookTitle = book.title
  const prefix = 'Diriliş Yayınları'

  return {
    title: bookTitle ? prefix + ' | ' + bookTitle : prefix,
  }
}

export default async function Book({
  params: { slug },
}: {
  params: { slug: string }
}) {
	const bookId = slug.split('_')[1]
	const book = await getBookById(bookId)
	console.log('boofaak', book)
	return <DetailContainer book={book} />
}
