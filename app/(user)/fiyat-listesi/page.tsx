import { Suspense } from 'react'
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
import { booksSet } from '@/constants/booksSet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getBooks } from '@/app/actions'

export const metadata = {
  title: 'Diriliş Yayınları | Fiyat Listesi',
}

const LIMIT = 12
const necessaryProperties = {
  title: 1,
  price: 1,
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const { books, count } = await getBooks({
    searchParams,
    necessaryProperties,
    booksSet,
    sort: true,
    includeBooksSetFilter: true,
  })

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
              {books.map((book: any) => (
                <TableRow key={book.id}>
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
