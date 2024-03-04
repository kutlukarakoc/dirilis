import { Books } from './books'

type CommonBookTypes = Pick<
  Books,
  'title' | 'pages' | 'price' | 'publish' | 'isbn' | 'imageUrl'
>

export interface BookManagement extends CommonBookTypes {
  _id: string
}
