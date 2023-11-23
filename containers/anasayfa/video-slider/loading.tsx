import { Skeleton } from '@/components/ui/skeleton'

const VideosLoading = () => {
  return (
    <div className="flex h-[450px] flex-col space-y-2 md:h-[625px] mb-32 md:mb-40">
      <Skeleton className="h-full w-full" />
      <div className="flex items-center justify-center space-x-2">
        <Skeleton className="h-2 w-2 rounded-full" />
        <Skeleton className="h-2 w-2 rounded-full" />
      </div>
    </div>
  )
}

export default VideosLoading
