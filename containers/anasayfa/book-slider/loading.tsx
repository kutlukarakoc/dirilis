import { Skeleton } from '@/components/ui/skeleton'

const SliderLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:py-0 lg:space-x-8 xl:space-x-14 2xl:space-x-20 mb-32 md:mb-40">
      <Skeleton className="h-[200px] w-[150px] sm:h-[250px] sm:w-[200px] md:h-[350px] md:w-[250px] xl:h-[375px]" />
      <div className="w-full md:max-w-sm xl:max-w-xl 2xl:max-w-2xl">
        <Skeleton className="mb-2 h-6 w-full" />
        <Skeleton className="mb-2 h-6 w-full" />
        <Skeleton className="mb-2 h-6 w-full" />
        <Skeleton className="mb-4 h-6 w-full" />
        <Skeleton className="h-6 w-40" />
      </div>
    </div>
  )
}

export default SliderLoading
