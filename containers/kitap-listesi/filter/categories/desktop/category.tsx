'use client'

import { Button } from '@/components/ui/button'
import { CategoryWithKey } from '@/types/categories'
import { useSelectCategory } from '@/hooks/useSelectCategory'
import { useSearchParams } from 'next/navigation'

const CategoryButton = ({ category }: { category: CategoryWithKey }) => {
	const searchParams = useSearchParams()
	const [, selectCategory] = useSelectCategory()

  return (
    <Button
      variant="secondary"
      className={`min-w-[100px] 2xl:min-w-[115px] ${category.id === searchParams.get('category')?.split('-').at(-1) ? 'bg-primary-800 hover:bg-primary-800 text-white-50' : ''}`}
			onClick={() => selectCategory(category.key + '-' + category.id)}
    >
      {category.name}
    </Button>
  )
}

export default CategoryButton
