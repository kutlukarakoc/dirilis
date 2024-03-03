import BookCard from './card'
import { BookListNecessaryProperties } from '@/types/bookListNecessaryProperties'

const BookList = ({ books }: { books: BookListNecessaryProperties[] }) => {
  return (
    <section>
      <div
        className="mt-12 grid gap-x-8 gap-y-10 md:gap-y-20"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
        }}
      >
        {books.map((book: BookListNecessaryProperties) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </section>
  )
}

export default BookList
