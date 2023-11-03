import { useState, useEffect, ChangeEvent } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

type SearchBooksHook = [string, (e: ChangeEvent<HTMLInputElement>) => void]

const useSearchBooks = (): SearchBooksHook => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    params.delete('category')
    params.delete('page')
    term ? params.set('search', term) : params.delete('search')
    replace(`${pathname}?${params}`)
  }, 300)

  useEffect(() => {
    if (searchParams.get('search') === null || searchParams.get('search') === undefined) {
      setSearchTerm('')
    }
  }, [searchParams])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    handleSearch(e.target.value)
  }

  return [searchTerm, handleInputChange]
}

export default useSearchBooks
