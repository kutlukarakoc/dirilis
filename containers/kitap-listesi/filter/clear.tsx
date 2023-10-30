import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

const Clear = () => {
  return (
    <>
      <Button
        className="hidden md:block h-16 text-paragraph"
        variant="secondary"
      >
        Filtreleri Temizle
      </Button>
      <Button
        className="h-11 md:hidden"
        variant="secondary"
        size="icon"
      >
        <X className='w-5 h-5 opacity-50'/>
      </Button>
    </>
  )
}

export default Clear
