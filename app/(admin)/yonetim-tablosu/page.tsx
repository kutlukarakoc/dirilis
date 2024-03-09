import { Suspense } from 'react'
import AdminNavbar from '@/containers/yonetim-tablosu/navbar'
import ManagementTable from '@/containers/yonetim-tablosu'
import TableLoading from '@/containers/yonetim-tablosu/tableLoading'
import SearchBooks from '@/containers/yonetim-tablosu/search'
import ClearSearch from '@/containers/yonetim-tablosu/clear'
import PaginationWrapper from '@/components/paginationWrapper'
import Create from '@/containers/yonetim-tablosu/create'
import { getBooks } from '@/app/actions'
import { BookManagement } from '@/types/bookManagament'
import { GetBooksResponse } from '@/types/getBooksResponse'

export const metadata = {
  title: 'Diriliş Yayınları | Yönetim Tablosu',
}

const LIMIT = 12
const necessaryProperties = {
  title: 1,
  price: 1,
  publish: 1,
  isbn: 1,
  pages: 1,
  imageUrl: 1,
}

async function ManagementTableWrapper({
  promise,
}: {
  promise: () => Promise<GetBooksResponse<BookManagement>>
}) {
  const { books, count } = await promise()
  return (
    <>
      <ManagementTable books={books} />
      {count > LIMIT && (
        <PaginationWrapper
          count={count}
          limit={LIMIT}
        />
      )}
    </>
  )
}

export default async function ManagementPage({
  searchParams,
}: {
  searchParams: Record<string, string>
}) {
  const booksPromise = () => getBooks<BookManagement>({ searchParams, necessaryProperties })

  const { search, page } = searchParams
  const suspenseKey = search + page

  return (
    <>
      <AdminNavbar />
      <main className="container relative my-20 flex-1 md:my-32">
        <section>
          <div className="mb-16 flex flex-col justify-between gap-4 sm:flex-row">
            <div className="relative w-full max-w-xl">
              <SearchBooks />
              <ClearSearch />
            </div>
            <Create />
          </div>
          <Suspense
            key={suspenseKey}
            fallback={<TableLoading />}
          >
            <ManagementTableWrapper promise={booksPromise} />
          </Suspense>
        </section>
      </main>
    </>
  )
}
