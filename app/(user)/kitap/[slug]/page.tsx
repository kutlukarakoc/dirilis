import { Metadata } from 'next'
import BooksSchema from '@/lib/models/books.model'
import { connectToDB } from '@/lib/mongoose'
import BookImage from '@/containers/kitap/image'
import Title from '@/containers/kitap/title'
import Price from '@/containers/kitap/price'
import BookTabs from '@/containers/kitap/tabs'

async function getBookById(id: string) {
	await connectToDB()
	const book = await BooksSchema.findOne({_id: id}).maxTimeMS(5000)
	const formattedBook = await JSON.parse(JSON.stringify(book))
	return formattedBook
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const bookId = slug.split('-').at(-1) as string

  const book = await getBookById(bookId)
  const bookTitle = book.title
  const prefix = 'Diriliş Yayınları'

  return {
    title: bookTitle ? prefix + ' | ' + bookTitle : prefix,
  }
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {
	const bookId = slug.split('-').at(-1) as string
	const book = await getBookById(bookId)
	
	return (
		<section>
			<div className="flex flex-col items-center justify-between md:flex-row md:items-start">
				<BookImage
					source={book.imageUrl}
					title={book.title}
				/>
				<article className="w-full md:w-7/12">
					<Title title={book.title} />
					<Price price={book.price} />
					<BookTabs book={book} />
				</article>
			</div>
		</section>
	)
}
