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
				<Books books={books} />
      </Suspense>
			{count > 12 && <Pagination count={count} />}
    </>
  )
}

export default ListingContainer
