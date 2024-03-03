import { Book } from './books'

export type BookListNecessaryProperties = Pick<
  Book,
  'title' | 'id' | 'price' | 'category' | 'imageUrl'
>
