'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import useSearchBooks from '@/hooks/useSearchBooks'

const SearchBooks = () => {
  const [searchTerm, handleInputChange] = useSearchBooks()

  return (
    <div className="relative flex h-11 flex-1 items-center rounded-md bg-primary-50 xl:h-14">
      <Input
        type="text"
        placeholder="Kitap ara..."
        className="border-0 border-none bg-transparent pl-12 placeholder:text-paragraph focus-visible:ring-transparent focus-visible:ring-offset-0"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Search
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-900 opacity-50 md:h-6 md:w-6"
        aria-label="Search icon"
      />
    </div>
  )
}

export default SearchBooks
