import Filter from '@/containers/kitap-listesi/filter'
import BookList from '@/containers/kitap-listesi/books'
import BooksLoading from '@/containers/kitap-listesi/books/loading'
import PaginationWrapper from '@/components/paginationWrapper'
import { Suspense } from 'react'
import { getBooks } from '@/app/actions'
import { BookListNecessaryProperties } from '@/types/bookListNecessaryProperties'
import { GetBooksResponse } from '@/types/getBooksResponse'

export const metadata = {
  title: 'Diriliş Yayınları | Kitap Listesi',
}

const LIMIT = 12
const necessaryProperties = {
  title: 1,
  price: 1,
  category: 1,
  imageUrl: 1,
}

async function BookListWrapper({
  promise,
}: {
  promise: () => Promise<GetBooksResponse<BookListNecessaryProperties>>
}) {
  const { books, count } = await promise()
  return (
    <>
      <BookList books={books} />
      {count > LIMIT && (
        <PaginationWrapper
          count={count}
          limit={LIMIT}
        />
      )}
    </>
  )
}

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string>
}) {
  const booksPromise = () => getBooks<BookListNecessaryProperties>({ searchParams, necessaryProperties })

  const { category, search, page } = searchParams

  const suspenseKey = category + search + page

  return (
    <>
      <Filter />
      <Suspense
        key={suspenseKey}
        fallback={<BooksLoading />}
      >
        <BookListWrapper promise={booksPromise} />
      </Suspense>
    </>
  )
}
