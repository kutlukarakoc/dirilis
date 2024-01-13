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
import { formatPrice } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import { setBooks } from '@/constants/setBooks'

export const metadata = {
  title: 'Diriliş Yayınları | Fiyat Listesi',
}

const necessaryProperties = {
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
    const upperCasedSearchTerm = search.toLocaleUpperCase('TR')
    const books = await Book.find(
      { title: new RegExp(upperCasedSearchTerm) },
      necessaryProperties,
    )
      .limit(LIMIT)
      .skip((+page - 1) * LIMIT)
      .maxTimeMS(5000)
    const count = await Book.find(
      { title: new RegExp(upperCasedSearchTerm) },
      necessaryProperties,
    ).count()
    return { books, count }
  }

  const books = await Book.find({}, necessaryProperties)
    .limit(LIMIT)
    .skip((+page - 1) * LIMIT)
    .maxTimeMS(5000)
  const count = await Book.find({}, necessaryProperties).count()

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

  const booksWithSets =
    page === (count / LIMIT).toFixed(0) ? [...books, ...setBooks] : books

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
              {booksWithSets.map((book, index) => (
                <TableRow key={index}>
                  <TableCell>{book.title}</TableCell>
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
