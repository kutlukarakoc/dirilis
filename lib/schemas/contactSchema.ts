import * as z from 'zod'

const phoneRegex =
  /\s*(?:\+?(\d{1,3}))?[\W\D\s]^|()*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d[\W\D\s]*?\d)(?: *x(\d+))?\s*$/g

export const contactSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'İsim sadece alfabetik karakterler içerebilir.',
    })
    .min(1, {
      message: 'İsim alanı boş bırakılamaz.',
    }),

  surname: z
    .string({
      invalid_type_error: 'Soyisim sadece alfabetik karakterler içerebilir.',
    })
    .min(1, {
      message: 'Soyisim alanı boş bırakılamaz.',
    }),

  email: z
    .string()
    .min(1, {
      message: 'Email alanı boş bırakılamaz.',
    })
    .email({
      message: 'Geçerli bir email giriniz.',
    }),

  phone: z
    .string()
    .min(1, {
      message: 'Telefon numarası alanı boş bırakılamaz.',
    })
    .regex(phoneRegex, {
      message: 'Geçerli bir telefon numarası giriniz.',
    })
    .max(20, {
      message: 'Geçerli bir telefon numarası giriniz.',
    }),

  message: z.string().min(1, {
    message: 'Mesaj alanı boş bırakılamaz.',
  }),
})
