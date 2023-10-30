import { Category } from './books'

export interface SimplifiedBooks {
	title: string
  id: string
  price: number
	category: Category
	imageUrl: string
}