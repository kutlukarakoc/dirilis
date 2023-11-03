import Image from 'next/image'
import { shimmer, toBase64 } from '@/lib/utils'

interface Props {
  source: string
  alt: string
  ratio: string
}

const SlideImage: React.FC<Props> = ({ source, alt, ratio }) => {
  return (
    <figure
      className="relative h-auto w-9/12 max-w-[225px] rounded-2xl object-contain sm:w-5/12 sm:max-w-[275px] 2xl:max-w-xs"
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={source}
        alt={alt}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
        loading="lazy"
        className="rounded-2xl"
        sizes="320px, (max-width: 1150px) 293px, (max-width: 640px) 225px"
        fill
      />
    </figure>
  )
}

export default SlideImage
