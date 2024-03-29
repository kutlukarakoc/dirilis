import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import { Language } from '@/types/languages'
import { LoginResponse } from '@/types/loginResponse'
import { signIn } from 'next-auth/react'
import * as z from 'zod'
import { loginSchema } from '@/lib/schemas/loginSchema'

const customTwMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [
      {
        text: [
          'smaller',
          'label',
          'paragraph-mobile',
          'paragraph-tablet',
          'paragraph',
          'header-6',
          'header-5',
          'header-4',
          'header-3',
          'header-2',
          'header-1',
        ],
      },
    ],
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}

export const formatPrice = (price: number): string => {
  const parts = price.toString().split('.')
  const integerPart = parts[0]
  const decimalPart = parts[1] || '00'

  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  const formattedPrice = `${formattedIntegerPart},${decimalPart} TL`

  return formattedPrice
}

export const formatHref = (path: string, title: string, id: string): string => {
  const formattedTitle = title
    .toLowerCase()
    .replaceAll('/', ' ')
    .split(' ')
    .join('-')
  const finalUrl = `/${path}/${formattedTitle}-${id}`
  return finalUrl
}

export const shimmer = () => `
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 100% 100%">
  <style>
    <![CDATA[
      @keyframes pulse {
        50% {
          opacity: .5;
        }
      }
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    ]]>
  </style>
  <rect width="100%" height="100%" rx="8" fill="#E2E8F0" class="animate-pulse bg-primary-100" />
</svg>`

export const toBase64 = (str: string): string =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const getPrefferedLanguage = (): Language => {
  const languages: Language[] = ['tr', 'en', 'de', 'ru', 'far', 'ar']

  const language = navigator.language
  const languagePrimaryStandard = language.substring(0, 2)

  const prefferedLanguage =
    languages.find((lang) => lang === languagePrimaryStandard) || 'tr'

  return prefferedLanguage
}

export const handleSignin = async (
  values: z.infer<typeof loginSchema>,
): Promise<LoginResponse> => {
  const validatedFields = loginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { status: 'error', message: 'Geçersiz email ya da şifre girdiniz' }
  }

  const { email, password } = validatedFields.data

  try {
    const response = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
    })

    if (!response?.ok) {
      switch (response?.error) {
        case 'CredentialsSignin':
          return {
            status: 'error',
            message: 'Geçersiz email veya şifre girdiniz',
          }

        default:
          console.log('unexpected login try err:', response?.error)
          return { status: 'error', message: 'Beklenmeyen bir hata oluştu' }
      }
    }

    return { status: 'success', message: 'Giriş işlemi başarılı' }
  } catch (error) {
    console.log('unexpected login cath err:', error)
    return { status: 'error', message: 'Beklenmeyen bir hata oluştu' }
  }
}

export const convertFileToBase64 = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64String = reader.result as string
      resolve(base64String)
    }
    reader.onerror = (error) => {
      reject(error)
    }
  })
}

export const convertSearchTerm = (term: string): string => {
  let text = term.replace(/[-/^$*+?.()|[\]{}]/g, '')

  const replacements: { [key: string]: string } = {
    i: '(ı|i|İ|I|İ)',
    I: '(ı|i|İ|I|İ)',
    ı: '(ı|i|İ|I|İ)',
    İ: '(ı|i|İ|I|İ)',
    İ: '(ı|i|İ|I|İ)',
    g: '(ğ|g|Ğ|G)',
    G: '(ğ|g|Ğ|G)',
    ğ: '(ğ|g|Ğ|G)',
    Ğ: '(ğ|g|Ğ|G)',
    u: '(ü|u|Ü|U)',
    U: '(ü|u|Ü|U)',
    ü: '(ü|u|Ü|U)',
    Ü: '(ü|u|Ü|U)',
    s: '(ş|s|Ş|S)',
    S: '(ş|s|Ş|S)',
    ş: '(ş|s|Ş|S)',
    Ş: '(ş|s|Ş|S)',
    o: '(ö|o|Ö|O)',
    O: '(ö|o|Ö|O)',
    ö: '(ö|o|Ö|O)',
    Ö: '(ö|o|Ö|O)',
    c: '(ç|c|Ç|C)',
    C: '(ç|c|Ç|C)',
    ç: '(ç|c|Ç|C)',
    Ç: '(ç|c|Ç|C)',
  }

  const newArray = text.split('').map((char) => replacements[char] || char)
  return newArray.join('')
}
