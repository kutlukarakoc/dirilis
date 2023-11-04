import { SimplifiedBooks } from '@/types/simplifiedBooks'
import Filter from './filter'
import Pagination from './pagination'
import BooksLoading from './loading'
import dynamic from 'next/dynamic'
import { Suspense } from 'react';
const Books = dynamic(() => import('./books'), {
  loading: () => <BooksLoading />, suspense: true, ssr: false,
})

const ListingContainer = ({ books, count }: { books: SimplifiedBooks[], count: number }) => {
	console.log('count', count)
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
