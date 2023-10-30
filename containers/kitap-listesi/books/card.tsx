import Image from 'next/image'
import Link from 'next/link'
import { formatHref, formatPrice, shimmer, toBase64 } from '@/lib/utils'
import { SimplifiedBooks } from '@/types/simplifiedBooks'

const BookCard = ({ book }: { book: SimplifiedBooks }) => {
  const url = formatHref('kitap', book.title, book.id)

  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-primary-50 pb-3 pt-5 md:py-8">
      <Link href={url}>
        <Image
          src={book.imageUrl}
          alt={book.title}
          width={175}
          height={250}
          priority={false}
          sizes="(max-width: 650px) 140px, 175px"
					placeholder={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
					className='max-w-[140px] sm:max-w-[175px]'
        />
      </Link>

      <Link
        href={url}
        className="mb-1.5 mt-4 inline-block"
      >
        <h6 className="max-w-[225px] overflow-hidden text-ellipsis whitespace-nowrap text-paragraph-tablet md:text-paragraph text-primary-700">
          {book.title}
        </h6>
      </Link>
      <div className="text-paragraph-tablet text-primary-900 md:text-paragraph">
        {formatPrice(book.price)}
      </div>
    </div>
  )
}

export default BookCard
