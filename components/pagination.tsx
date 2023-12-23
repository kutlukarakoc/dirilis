'use client'

import usePagination from '@/hooks/usePagination'

const Pagination = ({ count, limit }: { count: number; limit: number }) => {
  const [page, totalPages, prevPage, nextPage, clickedPage] = usePagination(
    count,
    limit,
  )

  return (
    <nav
      aria-label="listing-pagination"
      className="mt-20 flex items-center justify-center"
    >
      <ul className="inline-flex -space-x-px rounded-l-lg rounded-r-lg border border-primary-300 text-paragraph">
        <li>
          <button
            className="ml-0 flex h-8 items-center justify-center rounded-l-lg border-r border-primary-300 px-3 leading-tight text-primary-500 hover:bg-primary-100 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={prevPage}
            disabled={page === 1}
            aria-disabled={page === 1}
            aria-label="previous-book-page"
          >
            Geri
          </button>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index + 1}>
            <button
              className={`flex h-8 items-center justify-center border-r border-primary-300 px-3 leading-tight text-primary-500 hover:bg-primary-100 ${
                page === index + 1
                  ? 'bg-primary-800 text-white-50 hover:bg-primary-800'
                  : ''
              }`}
              onClick={() => clickedPage(index)}
              aria-label="navigate-specific-book-page"
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            className="flex h-8 items-center justify-center rounded-r-lg px-3 leading-tight text-primary-500 hover:bg-primary-100 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={Number(page) === totalPages}
            aria-disabled={Number(page) === totalPages}
            aria-label="next-book-page"
            onClick={nextPage}
          >
            İleri
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
