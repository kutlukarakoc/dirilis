import * as z from 'zod'

export const createBookSchema = z.object({
  title: z.string().min(1, {
    message: 'Başlık boş bırakılamaz.',
  }),

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

  thickness: z
    .string()
    .min(1, {
      message: 'Kalınlık boş bırakılamaz.',
    })
    .refine((val) => !val.startsWith(',') && !val.endsWith(','), {
      message: 'Virgül ile başlamamalı veya bitmemelidir.',
    })
    .refine((val) => val.match(/^\d+(,\d+)*$/), {
      message: 'Sadece sayı ve virgül işareti içermelidir.',
    }),

  dimension: z
    .string()
    .min(1, {
      message: 'Ebat boş bırakılamaz.',
    })
    .refine(
      (val) =>
        !val.startsWith(',') &&
        !val.startsWith('*') &&
        !val.endsWith(',') &&
        !val.endsWith('*'),
      {
        message: 'Virgül veya yıldız ile başlamamalı veya bitmemelidir.',
      },
    )
    .refine((val) => val.match(/^(?:[\d,*]+,)*[\d,*]+$/), {
      message: 'Sadece sayı, yıldız ve virgül içermelidir.',
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

  category: z
    .object({
      name: z.string(),
      id: z.string(),
    })
    .refine((val) => val.name !== '' || val.id !== '', {
      message: 'Kategori alanı boş bırakılamaz.',
    }),

  imageUrl: z
    .string()
    .min(1, {
      message: 'Görsel boş bırakılamaz.',
    })
    .regex(/^.*\.webp$/, {
      message: 'Görsel webp tipinde olmalıdır.',
    }),

  contents: z.array(
    z.object({
      type: z.enum(['title', 'subtitle'], {
        errorMap: () => ({ message: 'Boş bırakılamaz.' }),
      }),
      text: z.string().min(1, {
        message: 'Boş bırakılamaz.',
      }),
    }),
  ),

  summary: z
    .string()
    .min(1, {
      message: 'Özet boş bırakılamaz.',
    })
    .max(1250, {
      message: 'Özet maksimum 1200 karakter uzunluğunda olmalıdır.',
    }),
})
