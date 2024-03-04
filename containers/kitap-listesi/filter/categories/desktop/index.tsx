import CategoryButton from '../desktop/category'
import { CategoryWithKey } from '@/types/categoryWithKey'
import { categories } from '@/constants/categories'

const Categories = () => {
  return (
    <div className="mt-10 hidden xl:flex xl:justify-between">
      {categories.map((category: CategoryWithKey) => (
        <CategoryButton
          key={category.id}
          category={category}
        />
      ))}
    </div>
  )
}

export default Categories
