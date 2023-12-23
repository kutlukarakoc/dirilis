import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div>
      <Skeleton className="mb-9 h-9 w-24 md:mb-16 md:h-14 md:w-32 xl:mb-28 xl:h-16 xl:w-40" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-24 sm:gap-y-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="shadow mb-4 flex h-48 flex-col items-center justify-center px-2 last-of-type:mb-0"
          >
            <Skeleton className="mb-2 h-8 w-44 md:mb-4" />
            <Skeleton className="mb-2 h-5 w-28 last-of-type:mb-0" />
            <Skeleton className="mb-2 h-5 w-28 last-of-type:mb-0" />
            <Skeleton className="mb-2 h-5 w-28 last-of-type:mb-0" />
          </div>
        ))}
      </div>
      <div className="mt-32 grid grid-cols-1 gap-y-32 md:mt-40 md:grid-cols-2 md:gap-x-24 md:gap-y-8">
        <Skeleton className="h-56 w-full rounded-md border-none sm:h-96 lg:h-full" />
        <div>
          <div className="flex space-y-4"></div>
          <Skeleton className="mb-7 h-7 w-24 md:mb-10 md:h-10 md:w-32 xl:w-40 2xl:mb-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="my-2 h-36 w-full" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="mt-10 h-11 w-32" />
        </div>
      </div>
    </div>
  )
}
