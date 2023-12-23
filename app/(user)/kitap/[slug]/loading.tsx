import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <section>
      <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
        <Skeleton className="mb-14 h-96 max-w-[362px] md:mb-0 md:w-4/12 lg:h-[539px]" />
        <div className="w-full md:w-7/12">
          <Skeleton className="mx-auto mb-10 h-8 w-64 md:mx-0 lg:mb-16 xl:h-12 xl:w-96"></Skeleton>
          <Skeleton className="mb-14 h-7 w-32 md:w-28 lg:mb-20 xl:h-9 xl:w-32"></Skeleton>
          <div className="flex justify-between md:w-11/12">
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
