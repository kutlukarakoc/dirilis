import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div>
      <Skeleton className="mb-9 h-9 w-24 md:mb-16 md:h-14 md:w-32 xl:mb-28 xl:h-16 xl:w-40" />
      <div className="flex flex-col items-center justify-center space-y-10 lg:h-[590px] lg:flex-row lg:justify-between lg:space-y-0">
        <Skeleton className="h-56 w-full rounded-md border-none sm:h-96 lg:h-full lg:w-7/12" />
        <div className="flex h-auto w-full flex-col justify-between lg:w-4/12">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="shadow mb-4 flex h-[186px] flex-col items-center justify-center px-2 last-of-type:mb-0">
              <Skeleton className="mb-2 h-8 w-44 md:mb-4" />
              <Skeleton className="mb-4 h-6 w-28 last-of-type:mb-0" />
              <Skeleton className="mb-4 h-6 w-28 last-of-type:mb-0" />
              <Skeleton className="mb-4 h-6 w-28 last-of-type:mb-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
