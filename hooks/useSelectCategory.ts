import { useState, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useSelectCategory = () => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get('category') || '',
  )

  const selectCategory = (value: string) => {
    setSelectedCategory(value)
    replace(`${pathname}?page=1&category=${value}`)
  }

  useEffect(() => {
    if (!searchParams.get('category')) {
      setSelectedCategory('')
    }
  }, [searchParams])

  return [selectedCategory, selectCategory] as const
}
