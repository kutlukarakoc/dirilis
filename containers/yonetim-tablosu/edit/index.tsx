'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import EditForm from './editForm'
import { FileEdit } from 'lucide-react'
import { BookManagement } from '@/types/bookManagament'
import { useState } from 'react'

const Edit = ({ book }: { book: BookManagement }) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <FileEdit className="cursor-pointer text-primary-600" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="mt-4 text-paragraph md:text-header-6 xl:text-header-5">
            Düzenle: {book.title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full w-full">
          <EditForm book={book} setOpen={setOpen} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default Edit
