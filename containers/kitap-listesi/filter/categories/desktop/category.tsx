'use client'

import { Button } from '@/components/ui/button'
import { CategoryWithKey } from '@/types/categories'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const CategoryButton = ({ category }: { category: CategoryWithKey }) => {
	const router = useRouter()
  const pathname = usePathname()
	const searchParams = useSearchParams()
 
  const categoryKey = searchParams.get('category')

  return (
    <Button
      variant="secondary"
      className={`min-w-[100px] 2xl:min-w-[115px] ${category.id === categoryKey?.split('-').at(-1) ? 'bg-primary-800 hover:bg-primary-800 text-white-50' : ''}`}
			onClick={() => {
				router.push(pathname + '?category=' + category.key + '-' + category.id)
			}}
    >
      {category.name}
    </Button>
  )
}

export default CategoryButton
