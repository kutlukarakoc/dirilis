import { Publish } from "./books"

export interface BookManagement {
	title: string
	pages: number
	price: number
	publish: Publish
	isbn: string
	_id: string
}