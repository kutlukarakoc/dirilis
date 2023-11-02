import { SimplifiedBooks } from '@/types/simplifiedBooks'
import Filter from './filter'
import Pagination from './pagination'
import BooksLoading from './loading'
import dynamic from 'next/dynamic'
const Books = dynamic(() => import('./books'), {
  loading: () => <BooksLoading />,
})

const ListingContainer = ({ books }: { books: SimplifiedBooks[] }) => {
  return (
    <>
      <Filter />
      <Books books={books} />
			<Pagination />
    </>
  )
}

export default ListingContainer
