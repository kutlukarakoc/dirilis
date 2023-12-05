'use client'

import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const ClearSearch = () => {
	const { replace } = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const handleClearFilters = () => replace(pathname + '?page=1')

	useEffect(() => {
    if (searchParams.get('page') === null || searchParams.get('page') === undefined) {
      replace(pathname + '?page=1')
    }
  }, [searchParams])

	return (
		<Button
			className="h-6 hover:bg-primary-50 absolute right-2 top-1/2 -translate-y-1/2"
			variant="secondary"
			size="icon"
			onClick={handleClearFilters}
	>
		<X className='w-6 h-6 opacity-50'/>
	</Button>
	)
}

export default ClearSearch