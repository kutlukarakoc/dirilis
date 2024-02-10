import { Book } from './books'

type CommonBookTypes = Pick<
  Book,
  'title' | 'pages' | 'price' | 'publish' | 'isbn' | 'imageUrl'
>

export interface BookManagement extends CommonBookTypes {
  _id: string
}
