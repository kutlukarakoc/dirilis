import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Loader2 } from 'lucide-react'

const EditFormFooter = ({ isUpdating }: { isUpdating: boolean }) => {
  return (
    <div className="flex items-center justify-between md:!mt-20">
      <Button
        type="submit"
        size="lg"
        disabled={isUpdating}
        aria-disabled={isUpdating}
      >
        {isUpdating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isUpdating ? 'Güncelleniyor' : 'Güncelle'}
      </Button>
      <DialogClose asChild>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          disabled={isUpdating}
          aria-disabled={isUpdating}
        >
          İptal Et
        </Button>
      </DialogClose>
    </div>
  )
}

export default EditFormFooter
