'use client'

import { Language } from '@/types/languages'
import { Direction } from '@/types/direction'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'

export const useLanguageDirection = (): [Language, Direction] => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams()
  const params: URLSearchParams = new URLSearchParams(searchParams.toString())
  const language: Language = (params.get('lang') as Language) || 'tr'

  const direction: Direction =
    language === 'ar' || language === 'far' ? 'rtl' : 'ltr'

  return [language, direction]
}
