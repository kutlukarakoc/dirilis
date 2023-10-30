import { Button } from '@/components/ui/button'
import { Category } from '@/types/books'

const CategoryButton = ({ category }: { category: Category }) => {
  return (
    <Button
      variant="secondary"
      size="lg"
      className="max-w-[209px] py-6"
    >
      {category.name}
    </Button>
  )
}

export default CategoryButton
