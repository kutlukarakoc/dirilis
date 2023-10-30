import { Category } from '@/types/books'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { filterCategories } from '@/constants/categories'

const Categories = () => {
  return (
    <div className="mt-8 md:hidden">
      <Select defaultValue="0">
        <SelectTrigger>
          <SelectValue placeholder="Kategoriler" />
        </SelectTrigger>
        <SelectContent className="bg-white-50">
          <SelectGroup>
            {filterCategories.map((category: Category) => (
              <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Categories
