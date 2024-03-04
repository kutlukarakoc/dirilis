import { Books } from './books'

export type UpdateBook = Pick<
  Books,
  'price' | 'isbn' | 'pages' | 'imageUrl' | 'publish'
>
