import BookCard from './card'
import { SimplifiedBooks } from '@/types/simplifiedBooks'

const BookList = ({ books }: { books: SimplifiedBooks[] }) => {
  return (
    <section>
      <div
        className="mt-12 grid gap-x-8 gap-y-10 md:gap-y-20"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
        }}
      >
        {books.map((book: SimplifiedBooks) => (
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
