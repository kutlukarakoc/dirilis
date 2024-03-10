import { useState, useEffect, ChangeEvent } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const useSearchBooks = () => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')

  const handleSearch = useDebouncedCallback((term: string) => {
    const params: URLSearchParams = new URLSearchParams(searchParams)
    params.delete('category')
    params.set('page', '1')
    term ? params.set('search', term) : params.delete('search')
    replace(`${pathname}?${params}`)
  }, 500)

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearchTerm('')
    }
  }, [searchParams])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    handleSearch(e.target.value)
  }

  return [searchTerm, handleInputChange] as const
}

export default useSearchBooks
