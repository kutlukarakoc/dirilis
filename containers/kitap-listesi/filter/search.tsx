import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const SearchBooks = () => {
  return (
    <div className='flex-1 relative h-11 md:h-16 bg-primary-50 flex items-center rounded-md'>
      <Input
        type="text"
        placeholder="Kitap ara..."
        className="border-none border-0 bg-transparent focus-visible:ring-transparent focus-visible:ring-offset-0 placeholder:text-paragraph pl-12"
      />
      <Search className='absolute top-1/2 -translate-y-1/2 left-4 text-primary-900 opacity-50 w-5 h-5 md:h-6 md:w-6' aria-label='Search icon' />
    </div>
  )
}

export default SearchBooks
