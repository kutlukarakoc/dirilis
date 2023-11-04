'use client'

import usePagination from "@/hooks/usePagination"

const Pagination = ({ count }: {count: number}) => {
	const [page, totalPages, prevPage, nextPage, clickedPage ] = usePagination(count);

	console.log('totalPages', totalPages)

  return (
    <nav aria-label="listing-pagination" className="flex justify-center items-center mt-20">
      <ul className="inline-flex -space-x-px text-paragraph border border-primary-300 rounded-l-lg rounded-r-lg">
        <li>
          <button
            className="ml-0 flex h-8 items-center justify-center border-r border-primary-300 px-3 leading-tight text-primary-500 hover:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-lg"
						onClick={prevPage}
						disabled={page === 1}
						aria-disabled={page === 1}
          >
            Geri
          </button>
        </li>
				{Array.from({ length: totalPages }).map((_, index) => (
					<li key={index + 1}>
						<button
						className={`flex h-8 items-center justify-center border-r border-primary-300 px-3 leading-tight text-primary-500 hover:bg-primary-100 ${page === index + 1 ? 'bg-primary-800 hover:bg-primary-800 text-white-50' : ''}`}
						onClick={() => clickedPage(index)}
						>
							{index + 1}
						</button>
					</li>
        ))}
        <li>
          <button
            className="flex h-8 items-center justify-center px-3 leading-tight text-primary-500 hover:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-r-lg"
						disabled={Number(page) === totalPages}
						aria-disabled={Number(page) === totalPages}
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