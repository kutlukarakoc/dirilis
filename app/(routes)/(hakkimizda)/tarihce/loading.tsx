import { Skeleton } from '@/components/ui/skeleton'


export default function Loading() {
  return (
    <div>
      <Skeleton className="mb-9 h-9 w-24 md:mb-16 md:h-14 md:w-32 xl:mb-28 xl:h-16 xl:w-40" />
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className='flex flex-wrap'>
          {Array.from({
            length: Math.floor(Math.random() * (30 - 8 + 1)) + 8,
          }).map((_, letterLength) => (
            <Skeleton
              key={letterLength + 'lt'}
              className="mb-2 h-4 md:h-5 xl:h-6 mr-2"
              style={{
                width: Math.floor(Math.random() * (125 - 60 + 1)) + 60 + 'px',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
