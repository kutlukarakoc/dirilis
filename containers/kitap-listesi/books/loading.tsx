import { Skeleton } from '@/components/ui/skeleton'

const BooksLoading = () => {
  return (
    <div
      className="mt-32 grid gap-x-8 gap-y-10 md:mt-40 md:gap-y-20"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
      }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-xl bg-primary-50 pb-3 pt-5 md:py-8"
        >
          <Skeleton className="h-36 w-24 md:h-[264px] md:w-44" />
          <Skeleton className="mb-1.5 mt-4 h-5 w-36 md:h-6 md:w-56" />
          <Skeleton className="h-5 w-14" />
        </div>
      ))}
    </div>
  )
}

export default BooksLoading
