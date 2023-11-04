import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div>
      <div className="flex w-full items-center space-x-2">
        <Skeleton className="h-11 flex-1 md:h-14" />
        <Skeleton className="flex-0 h-11 w-10 md:h-14 md:w-36" />
      </div>
      <div className="mt-10 hidden xl:flex xl:justify-between">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-12 w-full max-w-[100px]"
          />
        ))}
      </div>
      <Skeleton className="mt-8 h-10 w-full xl:hidden" />

      <div
        className="mt-32 md:mt-40 grid gap-x-8 gap-y-10 md:gap-y-20"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-xl bg-primary-50 pb-3 pt-5 md:py-8"
          >
            <Skeleton className="h-36 w-24 md:h-64 md:w-44" />
            <Skeleton className="mb-1.5 mt-4 h-5 w-36 md:h-6 md:w-56" />
            <Skeleton className="h-5 w-14" />
          </div>
        ))}
      </div>
    </div>
  )
}
