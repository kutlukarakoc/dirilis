import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mb-14 flex h-[280px] items-center justify-center rounded-md bg-primary-50 py-5 md:h-[450px] lg:mb-0 lg:h-[575px] lg:max-w-[80%]">
          <Skeleton className="h-full max-h-[450px] w-[160px] max-w-[305px] md:w-full" />
        </div>
        <div className="w-full">
          <Skeleton className="mx-auto mb-10 h-8 w-64 md:mx-0 lg:mb-16 xl:h-12 xl:w-96"></Skeleton>
          <Skeleton className="mb-14 h-7 w-32 md:w-28 lg:mb-20 xl:h-9 xl:w-32"></Skeleton>
          <div className="flex justify-between">
            <Skeleton className="h-7 w-20 xl:h-8 xl:w-32" />
            <Skeleton className="h-7 w-20 xl:h-8 xl:w-28" />
            <Skeleton className="h-7 w-20 xl:h-8 xl:w-24" />
          </div>
          <div className="mt-16 flex flex-wrap gap-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>
    </section>
  )
}
