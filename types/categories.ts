import { Category } from './books'

export interface Categories {
  categories: Category[]
}

export interface CategoryWithKey extends Category {
  key: string
}
