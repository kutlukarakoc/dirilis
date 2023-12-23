import { Book } from './books'

export type SimplifiedBooks = Pick<
  Book,
  'title' | 'id' | 'price' | 'category' | 'imageUrl'
>
