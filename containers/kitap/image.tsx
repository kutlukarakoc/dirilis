import { shimmer, toBase64 } from '@/lib/utils'
import Image from 'next/image'

const BookImage = ({ source, title }: { source: string; title: string }) => {
  return (
    <picture className="mb-14 w-40 max-w-[362px] md:mb-0 md:w-4/12">
      <Image
        src={source}
        alt={title}
        width={362}
        height={543}
        quality={100}
        className="h-auto w-full"
        priority
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
        sizes="(max-width: 768px) 160px, (max-width: 1150px) 280px, 362px"
      />
    </picture>
  )
}

export default BookImage
