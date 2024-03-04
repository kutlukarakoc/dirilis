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

export const metadata = {
  title: 'Diriliş Yayınları | Yönetim Tablosu',
}

const LIMIT = 12
const necessaryProperties = {
  title: 1,
  price: 1,
  publish: 1,
  isbn: 1,
  _id: 1,
  pages: 1,
  imageUrl: 1,
}

export default async function ManagementPage({
  searchParams,
}: {
  searchParams: Record<string, string>
}) {
  const { books, count } = await getBooks({ searchParams, necessaryProperties })

  const convertedBooks = books.map(
    (book: BookManagement) => ({
      title: book.title,
      pages: book.pages,
      price: book.price,
      publish: {
        lastNo: book.publish.lastNo,
        firstDate: book.publish.firstDate,
        lastDate: book.publish.lastDate,
      },
      imageUrl: book.imageUrl,
      isbn: book.isbn,
      id: book.id.toString(),
    }),
  )

  const { search, page } = searchParams
  const suspenseKey = search ? search + page : 'page' + page

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
            <ManagementTable books={convertedBooks} />
          </Suspense>
          {count > LIMIT && (
            <PaginationWrapper
              count={count}
              limit={LIMIT}
            />
          )}
        </section>
      </main>
    </>
  )
}
