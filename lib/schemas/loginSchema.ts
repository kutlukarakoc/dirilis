import * as z from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email alanı boş bırakılamaz.',
    })
    .email({
      message: 'Geçerli bir email giriniz.',
    }),

  password: z.string().min(1, {
    message: 'Şifre alanı boş bırakılamaz.',
  }),
})
