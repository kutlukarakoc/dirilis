import { Skeleton } from '@/components/ui/skeleton'
import AdminNavbar from '@/containers/yonetim-tablosu/navbar'
import TableLoading from '@/containers/yonetim-tablosu/tableLoading'

export default function Loading() {
  return (
    <>
      <AdminNavbar />
      <main className="container relative my-20 flex-1 md:my-32">
        <section>
          <div className="mb-16 flex flex-col justify-between gap-4 sm:flex-row">
            <Skeleton className="h-11 max-w-xl flex-1" />
            <Skeleton className="h-11 w-full max-w-[157px]" />
          </div>
          <TableLoading />
        </section>
      </main>
    </>
  )
}
