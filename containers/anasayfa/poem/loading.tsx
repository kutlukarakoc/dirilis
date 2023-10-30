import { Skeleton } from '@/components/ui/skeleton'

const PoemLoading = () => {
  return (
    <div className="rounded-md border-2 border-primary-200 p-4 outline outline-4 outline-offset-4 outline-primary-200">
      <Skeleton className="mx-auto mb-8 h-10 w-44 md:mb-28 xl:h-14 xl:w-52" />
      <div className="mx-auto grid max-w-6xl gap-y-6 pl-0 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-8 sm:gap-y-16 md:pl-3 lg:pl-6">
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-full max-w-[300px] md:max-w-xs" />
          <Skeleton className="h-4 w-full max-w-[128px]" />
          <Skeleton className="h-4 w-full max-w-[288px] md:max-w-[375px]" />
          <Skeleton className="h-4 w-full max-w-[288px] md:max-w-[390px]" />
          <Skeleton className="md:max-ww-[400px] h-4 w-full max-w-[288px]" />
        </div>
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-full max-w-[288px] md:max-w-[390px]" />
          <Skeleton className="h-4 w-full max-w-[288px] md:max-w-xs" />
          <Skeleton className="md:max-ww-[300px] h-4 w-full max-w-[288px]" />
          <Skeleton className="h-4 w-full max-w-[288px] md:max-w-[288px]" />
          <Skeleton className="h-4 w-full max-w-[288px] md:max-w-xs" />
          <Skeleton className="h-4 w-full max-w-[144px]" />
        </div>
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-full max-w-[288px] md:max-w-[375px]" />
          <Skeleton className="h-4 w-full max-w-[288px] md:max-w-xs" />
          <Skeleton className="md:max-ww-[300px] h-4 w-full max-w-[288px]" />
          <Skeleton className="h-4 w-full max-w-[288px] md:max-w-[375px]" />
          <Skeleton className="md:max-ww-[400px] h-4 w-full max-w-[288px]" />
        </div>
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-full max-w-[128px]" />
          <Skeleton className="md:max-ww-[400px] h-4 w-full max-w-[288px]" />
          <Skeleton className="h-4 w-full max-w-[288px] md:max-w-xs" />
        </div>
      </div>
      <Skeleton className="mx-auto mt-10 h-4 w-52 sm:w-64 md:w-80" />
    </div>
  )
}

export default PoemLoading
