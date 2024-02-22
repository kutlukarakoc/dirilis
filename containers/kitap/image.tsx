import { shimmer, toBase64 } from '@/lib/utils'
import Image from 'next/image'

const BookImage = ({ source, title }: { source: string; title: string }) => {
  return (
    <picture>
      <Image
        src={source}
        alt={title}
        width={326}
        height={459}
        quality={100}
        className="h-auto max-h-[459px] w-full max-w-[362px]"
        priority
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
        sizes="(max-width: 768px) 160px, (max-width: 1150px) 280px, 326px"
      />
    </picture>
  )
}

export default BookImage
