import { Books } from './books'

export type BookListNecessaryProperties = Pick<
  Books,
  'title' | 'id' | 'price' | 'category' | 'imageUrl'
>
