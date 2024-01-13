'use client'

import { Trash2, Loader2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { deleteBook } from '@/app/actions'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const Delete = ({ id, title }: { id: string; title: string }) => {
  const { toast } = useToast()
	const { replace } = useRouter()

  const [open, setOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    const res = await deleteBook(id)

		setIsDeleting(false)
		setOpen(false)

    if (res.status === 'success') {
      toast({
        variant: 'success',
        title: res.message,
        description: 'Silinen Kitap: ' + title,
      })

			replace('/yonetim-tablosu?page=1')
    } else {
      toast({
        variant: 'destructive',
        title: res.message,
      })
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Trash2 className="cursor-pointer text-primary-600" />
      </DialogTrigger>
      <DialogContent className="!h-96 px-8 sm:!h-80 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Kitap Silme</DialogTitle>
          <div className="flex h-full w-full flex-col justify-between">
            <h6 className="mx-auto !mb-10 max-w-xl text-header-6 text-primary-700">
              <span className="font-semibold">{title}</span> isimli kitabı
              silmek istediğinizden emin misiniz?
            </h6>
            <Button
              onClick={handleDelete}
              className="ml-auto"
              type="submit"
              size="lg"
              disabled={isDeleting}
              aria-disabled={isDeleting}
            >
              {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isDeleting ? 'Siliniyor' : 'Kitabı Sil'}
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Delete
