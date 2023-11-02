import { Category } from '@/types/books'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { categories } from '@/constants/categories'

const MobileCategories = () => {
  return (
    <div className="mt-8 xl:hidden">
      <Select defaultValue="">
        <SelectTrigger>
          <SelectValue placeholder="Kategoriler" />
        </SelectTrigger>
        <SelectContent className="bg-white-50">
          <SelectGroup>
            {categories.map((category: Category) => (
              <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default MobileCategories
