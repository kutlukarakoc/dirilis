import { Metadata } from 'next'
import BooksSchema from '@/lib/models/books.model'
import { connectToDB } from '@/lib/mongoose'
import BookImage from '@/containers/kitap/image'
import Title from '@/containers/kitap/title'
import Price from '@/containers/kitap/price'
import BookTabs from '@/containers/kitap/tabs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

async function getBookById(id: string) {
  await connectToDB()
  const book = await BooksSchema.findOne({ _id: id }).maxTimeMS(5000)
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
  const bookTitle = book?.title
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

  if (!book) {
    return (
      <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-8 text-center">
        <h2 className="text-header-3 text-primary-800 sm:text-header-2">
          Kitap bulunamadı.
        </h2>
        <Button
          asChild
          size="lg"
        >
          <Link
            href="/kitap-listesi"
            className="text-header-5"
          >
            Kitap Listesini Görüntüle
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mb-14 flex items-center justify-center rounded-xl bg-primary-50 py-5 lg:mb-0 lg:max-w-[80%] lg:py-0">
          <BookImage
            source={book.imageUrl}
            title={book.title}
          />
        </div>
        <article>
          <Title title={book.title} />
          <Price price={book.price} />
          <BookTabs book={book} />
        </article>
      </div>
    </section>
  )
}
