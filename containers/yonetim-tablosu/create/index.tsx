'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import CreateForm from './createForm'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const Create = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          className="h-11 gap-2"
          size="lg"
        >
          <Plus className="cursor-pointer text-white-50" />
          Kitap Ekle
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="mt-4 text-paragraph md:text-header-6 xl:text-header-5">
            Kitap Oluştur
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full w-full">
          <CreateForm setOpen={setOpen} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default Create
