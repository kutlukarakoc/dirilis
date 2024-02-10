export interface Book {
  title: string
  id: string
  price: number
  pages: number
  thickness: string
  dimension: string
  publish: Publish
  isbn: string
  category: Category
  imageUrl: string
  contents?: Content[]
  summary: string
}

export interface Publish {
  lastNo: number
  firstDate: number
  lastDate: string
}

export interface Category {
  name: string
  id: string
}

export interface Content {
  type: 'title' | 'subtitle'
  text: string
}
