'use client'

import usePagination from '@/hooks/usePagination'
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const PaginationWrapper = ({
  count,
  limit,
}: {
  count: number
  limit: number
}) => {
  const [page, totalPages, prevPage, nextPage, clickedPage] = usePagination(
    count,
    limit,
  )

  return (
    <nav
      aria-label="listing-pagination"
      className="mt-20 flex items-center justify-center"
    >
      <Pagination>
        <PaginationContent>
          {page !== 1 && <PaginationPrevious href={prevPage()} />}
          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationLink
              href={clickedPage(index)}
              isActive={page === index + 1}
              key={index + 1}
            >
              {index + 1}
            </PaginationLink>
          ))}
          {Number(page) !== totalPages && <PaginationNext href={nextPage()} />}
        </PaginationContent>
      </Pagination>
    </nav>
  )
}

export default PaginationWrapper
