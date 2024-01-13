import { Publish } from "./books"

export interface UpdateBook {
	price: number
	isbn: string
	pages: number
	imageUrl: string
	publish: Publish
}