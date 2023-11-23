import * as z from "zod"

export const loginSchema = z.object({

	email: z.string({
		required_error: 'Email alanı boş bırakılamaz.'
	}).email({
		message: 'Geçerli bir email giriniz.'
	}),

	password: z.string({
		required_error: 'Şifre alanı boş bırakılamaz.'
	})
	.min(1, {
		message: 'Şifre alanı boş bırakılamaz.'
	})
})