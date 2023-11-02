'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

const SearchBooks = () => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

	const [searchKey, setSearchKey] = useState(search)
	console.log('searchsearch', search)
	console.log('search state', searchKey)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchKey(e.target.value)
	}

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if(searchKey.length > 0) {
			router.push(pathname + '?search=' + searchKey)
		} else {
			router.push(pathname + '?page=1')
		}
	}

  return (
    <form className='flex-1 relative h-11 xl:h-14 bg-primary-50 flex items-center rounded-md' onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Kitap ara..."
        className="border-none border-0 bg-transparent focus-visible:ring-transparent focus-visible:ring-offset-0 placeholder:text-paragraph pl-12"
				value={searchKey}
				onChange={handleInputChange}
      />
			<button type="submit" className='border-none outline-none absolute top-1/2 -translate-y-1/2 left-4'>
				<Search className='text-primary-900 opacity-50 w-5 h-5 md:h-6 md:w-6' aria-label='Search icon' />
			</button>
    </form>
  )
}

export default SearchBooks
