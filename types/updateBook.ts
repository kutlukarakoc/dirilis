import { Book } from './books'

export type UpdateBook = Pick<
  Book,
  'price' | 'isbn' | 'pages' | 'imageUrl' | 'publish'
>
