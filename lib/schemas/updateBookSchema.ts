import * as z from "zod"

export const updateBookSchema = z.object({
	price: z.number({
		invalid_type_error: 'Sadece rakam girilebilir.'
	}),

	isbn: z.string(),

	lastNo: z.number({
		invalid_type_error: 'Sadece rakam girilebilir.'
	}),

	firstDate: z.number({
		invalid_type_error: 'Sadece rakam girilebilir.'
	}),

	lastDate: z.string(),

	pages: z.number({
		invalid_type_error: 'Sadece rakam girilebilir.'
	})
})