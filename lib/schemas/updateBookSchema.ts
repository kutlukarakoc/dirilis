import * as z from 'zod'

export const updateBookSchema = z.object({
  price: z
    .number({
      invalid_type_error: 'Sadece rakam girilebilir.',
    })
    .min(1, {
      message: 'Fiyat alanı boş bırakılamaz.',
    }),

  isbn: z.string().min(1, {
    message: 'ISBN alanı boş bırakılamaz.',
  }),

  lastNo: z
    .number({
      invalid_type_error: 'Sadece rakam girilebilir.',
    })
    .min(1, {
      message: 'Son Baskı Numarası alanı boş bırakılamaz.',
    }),

  firstDate: z
    .number({
      invalid_type_error: 'Sadece rakam girilebilir.',
    })
    .min(1, {
      message: 'İlk Baskı Yılı alanı boş bırakılamaz.',
    }),

  lastDate: z.string().min(1, {
    message: 'Son Baskı Tarihi alanı boş bırakılamaz.',
  }),

  pages: z
    .number({
      invalid_type_error: 'Sadece rakam girilebilir.',
    })
    .min(1, {
      message: 'Sayfa Sayısı alanı boş bırakılamaz.',
    }),

  imageUrl: z
    .string({
      required_error: 'Görsel alanı boş bırakılamaz.',
    })
    .regex(/^.*\.webp$/, {
      message: 'Görsel webp tipinde olmalıdır.',
    }),
})
