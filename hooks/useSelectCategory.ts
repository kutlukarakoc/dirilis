import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type SelectCategory = (value: string) => void;

export const useSelectCategory = (): [string, SelectCategory] => {
	const { replace } = useRouter()
  const pathname = usePathname()
	const searchParams = useSearchParams()

	const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')

	const selectCategory = (value: string) => {
		setSelectedCategory(value)

		const params = new URLSearchParams(searchParams)
		params.delete('search')
		params.delete('page')
		params.set('category', value)
		replace(`${pathname}?${params}`)
	}

	useEffect(() => {
    if (searchParams.get('category') === null || searchParams.get('category') === undefined) {
      setSelectedCategory('')
    }
  }, [searchParams])

	return [selectedCategory, selectCategory]
}
