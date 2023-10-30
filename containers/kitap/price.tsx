import { formatPrice } from '@/lib/utils'

const Price = ({ price }: { price: number }) => {
  return (
    <h5 className="text-header-5 text-black-400/95 md:text-header-6 xl:text-header-4 mb-14 lg:mb-20">
      Fiyat: {formatPrice(price)}
    </h5>
  )
}

export default Price
