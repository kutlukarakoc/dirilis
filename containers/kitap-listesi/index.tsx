import { SimplifiedBooks } from '@/types/simplifiedBooks'
import Filter from './filter'
import Pagination from './pagination'
import BooksLoading from './loading'
import { Suspense } from 'react';
import Books from './books'

const ListingContainer = ({ books, count }: { books: SimplifiedBooks[], count: number }) => {
  return (
    <>
      <Filter />
			<Suspense fallback={<BooksLoading />}>
				{books.length > 0 ? (
					<Books books={books} />
				) : (
					<h2 className='text-center mt-28 text-header-6 md:text-header-5 xl:text-header-3'>
						Filtrelere uygun bir kitap bulunamadı.
					</h2>
				)}
      </Suspense>
			{count > 12 && <Pagination count={count} />}
    </>
  )
}

export default ListingContainer
