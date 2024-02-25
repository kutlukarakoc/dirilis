import { Button } from '@/components/ui/button'
import Link from 'next/link'

const BookNotFound = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-8 text-center">
      <h2 className="text-header-3 text-primary-800 sm:text-header-2">
        Kitap bulunamadı.
      </h2>
      <Button
        asChild
        size="lg"
      >
        <Link
          href="/kitap-listesi"
          className="text-header-5"
        >
          Kitap Listesini Görüntüle
        </Link>
      </Button>
    </div>
  )
}

export default BookNotFound
