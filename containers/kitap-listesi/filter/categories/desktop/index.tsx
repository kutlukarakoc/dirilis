import CategoryButton from '../desktop/category'
import { Category } from '@/types/books'
import { filterCategories } from '@/constants/categories'

const MobileCategories = () => {
  return (
    <div
      className="mt-12 hidden md:grid gap-7"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
    >
      {filterCategories.map((category: Category) => (
        <CategoryButton
          key={category.id}
          category={category}
        />
      ))}
    </div>
  )
}

export default MobileCategories
