import { Books } from './books'

export type BookManagement = Omit<
  Books,
  'thickness' | 'dimension' | 'category' | 'contents' | 'summary'
>
