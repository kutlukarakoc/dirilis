import * as z from 'zod'

export const updateBookSchema = z.object({
  price: z
    .string()
    .min(1, {
      message: 'Fiyat boş bırakılamaz.',
    })
    .refine((val) => !val.startsWith('.') && !val.endsWith('.'), {
      message: 'Nokta ile başlamamalı veya bitmemelidir.',
    })
    .refine((val) => val.match(/^\d+(\.\d+)?$/), {
      message: 'Sadece sayı ve nokta işareti içermelidir.',
    }),

  pages: z
    .string()
    .min(1, {
      message: 'Sayfa Sayısı boş bırakılamaz.',
    })
    .regex(/^[0-9]+$/, {
      message: 'Sadece rakam girilebilir.',
    }),

  isbn: z
    .string()
    .min(1, {
      message: 'ISBN boş bırakılamaz.',
    })
    .refine((val) => !val.startsWith('-') && !val.endsWith('-'), {
      message: 'Orta tire ile başlamamalı veya bitmemelidir.',
    })
    .refine((val) => val.match(/^\d+(-\d+)*$/), {
      message: 'Sadece sayı ve orta tire girilebilir.',
    }),

  lastNo: z
    .string()
    .min(1, {
      message: 'Son Baskı No boş bırakılamaz.',
    })
    .regex(/^[0-9]+$/, {
      message: 'Sadece rakam girilebilir.',
    }),

  firstDate: z
    .string()
    .min(1, {
      message: 'İlk Baskı Tarihi boş bırakılamaz.',
    })
    .regex(/^[0-9]+$/, {
      message: 'Sadece rakam girilebilir.',
    }),

  lastDate: z.string().min(1, {
    message: 'Son Baskı Tarihi boş bırakılamaz.',
  }),

  imageUrl: z
    .string({
      required_error: 'Görsel boş bırakılamaz.',
    })
    .regex(/^.*\.webp$/, {
      message: 'Görsel webp tipinde olmalıdır.',
    }),
})
