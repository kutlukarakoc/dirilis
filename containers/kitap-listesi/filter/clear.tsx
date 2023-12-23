'use client'

import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const Clear = () => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleClearFilters = () => replace(pathname + '?page=1')

  useEffect(() => {
    if (
      searchParams.get('page') === null ||
      searchParams.get('page') === undefined
    ) {
      replace(pathname + '?page=1')
    }
  }, [searchParams])

  return (
    <>
      <Button
        className="hidden h-14 text-paragraph xl:block"
        variant="secondary"
        onClick={handleClearFilters}
      >
        Filtreleri Temizle
      </Button>
      <Button
        className="h-11 hover:bg-primary-50 xl:hidden"
        variant="secondary"
        size="icon"
        onClick={handleClearFilters}
      >
        <X className="h-5 w-5 opacity-50" />
      </Button>
    </>
  )
}

export default Clear
