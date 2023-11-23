import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div>
      <Skeleton className="mb-9 h-9 w-24 md:mb-16 md:h-14 md:w-32 xl:mb-28 xl:h-16 xl:w-40" />
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-8 sm:gap-x-24">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="shadow mb-4 flex h-48 flex-col items-center justify-center px-2 last-of-type:mb-0">
              <Skeleton className="mb-2 h-8 w-44 md:mb-4" />
              <Skeleton className="mb-2 h-5 w-28 last-of-type:mb-0" />
              <Skeleton className="mb-2 h-5 w-28 last-of-type:mb-0" />
              <Skeleton className="mb-2 h-5 w-28 last-of-type:mb-0" />
            </div>
          ))}
        </div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 md:gap-y-8 md:gap-x-24 mt-32 md:mt-40">
        <Skeleton className="h-56 w-full rounded-md border-none sm:h-96 lg:h-full" />
				<div>
					<div className='flex space-y-4'></div>
					<Skeleton className="h-7 md:h-10 w-24 md:w-32 xl:w-40 mb-7 md:mb-10 2xl:mb-16" />
					<Skeleton className='w-16 h-4' />
					<Skeleton className='w-full h-36 my-2' />
					<Skeleton className='w-48 h-4' />
					<Skeleton className='w-32 h-11 mt-10' />
				</div>
      </div>
    </div>
  )
}
