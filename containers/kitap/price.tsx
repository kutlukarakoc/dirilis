import { formatPrice } from '@/lib/utils'

const Price = ({ price }: { price: number }) => {
  return (
    <h5 className="mb-14 text-header-5 text-black-400/95 md:text-header-6 lg:mb-20 xl:text-header-4">
      Fiyat: {formatPrice(price)}
    </h5>
  )
}

export default Price
