import { Suspense } from 'react'
import { connectToDB } from '@/lib/mongoose'
import Book from '@/lib/models/books.model'
import SearchBooks from '@/containers/yonetim-tablosu/search'
import ClearSearch from '@/containers/yonetim-tablosu/clear'
import PaginationWrapper from '@/components/paginationWrapper'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatHref, formatPrice } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import { setBooks } from '@/constants/setBooks'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Diriliş Yayınları | Fiyat Listesi',
}

const NECESSARY_PROPERTIES = {
  title: 1,
  price: 1,
}

const LIMIT = 12

async function getBooks({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  await connectToDB()

  const { search, page } = searchParams

  if (search !== null && search !== undefined) {
    if (search.includes('takım') || search.includes('takim')) {
      return { books: setBooks, count: 3 }
    }

    const upperCasedSearchTerm = search.toLocaleUpperCase('TR')

    const books = await Book.find(
      { title: new RegExp(upperCasedSearchTerm) },
      NECESSARY_PROPERTIES,
    )
      .limit(LIMIT)
      .skip((+page - 1) * LIMIT)
      .maxTimeMS(5000)

    const count = await Book.find(
      { title: new RegExp(upperCasedSearchTerm) },
      NECESSARY_PROPERTIES,
    ).count()

    return { books, count }
  }

  let books = await Book.find({}, NECESSARY_PROPERTIES)
    .limit(LIMIT)
    .skip((+page - 1) * LIMIT)
    .maxTimeMS(5000)

  const count = await Book.find({}, NECESSARY_PROPERTIES).count()

  books = page === (count / LIMIT).toFixed(0) ? [...books, ...setBooks] : books

  return { books, count }
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const { books, count } = await getBooks({ searchParams })

  const { search, page } = searchParams
  const suspenseKey = search ? search + page : 'page' + page

  return (
    <main className="container">
      <h1 className="page-title">Fiyat Listesi</h1>
      <section>
        <div className="relative mb-16 w-full max-w-xl">
          <SearchBooks />
          <ClearSearch />
        </div>
        <Suspense
          key={suspenseKey}
          fallback={<TableLoading />}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kitap İsmi</TableHead>
                <TableHead>Fiyat</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {books.map((book, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {book.id.includes('takim') ? (
                      book.title
                    ) : (
                      <Button
                        asChild
                        variant="link"
                      >
                        <Link
                          href={formatHref('kitap', book.title, book.id)}
                          prefetch={false}
                        >
                          {book.title}
                        </Link>
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>{formatPrice(book.price)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
        {count > LIMIT && (
          <PaginationWrapper
            count={count}
            limit={LIMIT}
          />
        )}
      </section>
    </main>
  )
}

function TableLoading() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Kitap İsmi</TableHead>
          <TableHead className="w-56">Fiyat</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 12 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="h-4 w-96" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-16" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
