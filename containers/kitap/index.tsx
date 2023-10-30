import Title from './title'
import BookImage from './image'
import BookTabs from './tabs'
import Price from './price'
import { Book } from '@/types/books'

const DetailContainer = ({ book }: { book: Book }) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
        <BookImage
          source={book.imageUrl}
          title={book.title}
        />
        <article className="w-full md:w-7/12">
          <Title title={book.title} />
          <Price price={book.price} />
          <BookTabs book={book} />
        </article>
      </div>
    </section>
  )
}

export default DetailContainer
