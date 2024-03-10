import { Metadata } from 'next'
import BookNotFound from '@/containers/kitap/BookNotFound'
import BookImage from '@/containers/kitap/image'
import Title from '@/containers/kitap/title'
import Price from '@/containers/kitap/price'
import BookTabs from '@/containers/kitap/tabs'
import { getBookById } from '@/app/actions'

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
    return <BookNotFound />
  }

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[615px]">
        <div className="mb-14 flex items-center justify-center rounded-md bg-primary-50 py-5 lg:mb-0 lg:max-w-[80%] lg:py-0">
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
