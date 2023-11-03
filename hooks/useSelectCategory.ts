import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type SelectCategory = (value: string) => void;

export const useSelectCategory = (): [string, SelectCategory] => {
	const { replace } = useRouter()
  const pathname = usePathname()
	const searchParams = useSearchParams()
 
  const selectedCategory = searchParams.get('category') || ''

	const selectCategory = (value: string) => {
		const params = new URLSearchParams(searchParams)
		params.delete('search')
		params.delete('page')
		params.set('category', value)
		replace(`${pathname}?${params}`)
	}

	return [selectedCategory, selectCategory]
}
