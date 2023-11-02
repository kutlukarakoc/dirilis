'use client'

import { useCallback, useEffect } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { getPrefferedLanguage } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const Language = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const language = searchParams.get('lang')

  let prefferedLanguage = 'tr'
  if (typeof window !== 'undefined') {
    prefferedLanguage = getPrefferedLanguage();
  }


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const handleChange = (value: string) => {
    router.push(pathname + '?' + createQueryString('lang', value))
  }

	useEffect(() => {
		if(language === null || language.length < 1) {
			router.push(pathname + '?' + createQueryString('lang', prefferedLanguage))
		}
	}, [])

  return (
    <div className="mt-0 2xl:mt-2">
      <Select
        defaultValue={language || 'tr'}
        onValueChange={handleChange}
      >
        <SelectTrigger className="w-28">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent className="bg-white-50">
          <SelectGroup>
            <SelectItem value="tr">TR</SelectItem>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="de">DE</SelectItem>
            <SelectItem value="ru">RU</SelectItem>
            <SelectItem value="ar">AR</SelectItem>
            <SelectItem value="far">FAR</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Language
