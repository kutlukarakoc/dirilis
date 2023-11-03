'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { categories } from '@/constants/categories'
import { CategoryWithKey } from '@/types/categories'
import { useSelectCategory } from '@/hooks/useSelectCategory'

const MobileCategories = () => {
	const [selectedCategory, selectCategory] = useSelectCategory()
	
  return (
    <div className="mt-8 xl:hidden">
      <Select value={selectedCategory} onValueChange={(value) => selectCategory(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Kategoriler" />
        </SelectTrigger>
        <SelectContent className="bg-white-50">
          <SelectGroup>
            {categories.map((category: CategoryWithKey) => (
              <SelectItem key={category.id} value={category.key + '-' + category.id}>{category.name}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default MobileCategories
