import Image from 'next/image'
import { shimmer, toBase64 } from '@/lib/utils'

interface QuoteImage {
  book: string
  image: string
  index: number
}

const QuoteImage: React.FC<QuoteImage> = ({ book, image, index }) => {
  return (
    <figure className="w-[150px] sm:w-[175px] md:w-[220px] xl:w-[256px]">
      <Image
        alt={book}
        src={image}
        priority={index === 0 ? true : false}
        width={256}
        height={386}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
        sizes="(max-width: 640px) 150px, (max-width: 768px) 175px, (max-width: 1280px) 220px, 256px"
      />
    </figure>
  )
}

export default QuoteImage
