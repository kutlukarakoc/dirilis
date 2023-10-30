import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div>
      <div className="flex justify-between">
        <Skeleton className="mb-9 h-9 w-28 md:mb-16 md:h-14 md:w-36 xl:mb-28 xl:h-16 xl:w-44" />
        <Skeleton className="h-10 w-28" />
      </div>
      <div className="flex h-auto min-h-[383px] w-full flex-col items-center justify-center sm:bg-primary-50 xl:min-h-[630px] 2xl:min-h-[660px]">
        <div className="flex h-full w-full flex-col items-center justify-center sm:w-10/12 xl:space-y-10">
          <Skeleton className="mb-6 h-36 w-56 sm:h-52 sm:w-80" />
          <div className="w-full">
            <Skeleton className="mb-2 h-3 w-full pl-4 sm:h-4" />
            <Skeleton className="mb-2 h-3 w-1/2 sm:h-4" />
            <Skeleton className="plt-4 full mb-2 h-3 sm:h-4" />
            <Skeleton className="h-3 w-4/5 sm:h-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
