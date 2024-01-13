import * as z from 'zod'

const imageUrlRegex = /^https:\/\/i\.ibb\.co\/.*\.webp$/

export const updateBookSchema = z.object({
  price: z.coerce.number({
    invalid_type_error: 'Sadece rakam girilebilir.',
    required_error: 'Fiyat alanı boş bırakılamaz.',
  }),

  isbn: z.string({
    required_error: 'ISBN alanı boş bırakılamaz.',
  }),

  lastNo: z.coerce.number({
    invalid_type_error: 'Sadece rakam girilebilir.',
    required_error: 'Son Baskı Numarası alanı boş bırakılamaz.',
  }),

  firstDate: z.coerce.number({
    invalid_type_error: 'Sadece rakam girilebilir.',
    required_error: 'İlk Baskı Yılı alanı boş bırakılamaz.',
  }),

  lastDate: z.string({
    required_error: 'Son Baskı Tarihi alanı boş bırakılamaz.',
  }),

  pages: z.coerce.number({
    invalid_type_error: 'Sadece rakam girilebilir.',
    required_error: 'Sayfa Sayısı alanı boş bırakılamaz.',
  }),

  imageUrl: z
    .string({
      required_error: 'Görsel linki alanı boş bırakılamaz',
    })
    .regex(imageUrlRegex, {
      message: 'Link https://i.ibb.co/ ile başlamalı ve .webp ile bitmelidir.',
    }),
})
