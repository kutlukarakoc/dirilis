'use client'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { updateBookSchema } from '@/lib/schemas/updateBookSchema'
import Image from 'next/image'
import { updateBook } from '@/app/actions'
import { Dispatch, SetStateAction, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { BookManagement } from '@/types/bookManagament'
import EditFormFooter from './editFormFooter'

interface EditForm {
  book: BookManagement
  setOpen: Dispatch<SetStateAction<boolean>>
}

const EditForm = ({ book, setOpen }: EditForm) => {
  const { toast } = useToast()

  const [isUpdating, setIsUpdating] = useState(false)

  const form = useForm<z.infer<typeof updateBookSchema>>({
    resolver: zodResolver(updateBookSchema),
    defaultValues: {
      price: book.price,
      pages: book.pages,
      isbn: book.isbn,
      lastNo: book.publish.lastNo,
      firstDate: book.publish.firstDate,
      lastDate: book.publish.lastDate,
      imageUrl: book.imageUrl,
    },
  })

  async function onSubmit(values: z.infer<typeof updateBookSchema>) {
    setIsUpdating(true)

    const id = book._id
    const data = {
      price: values.price,
      isbn: values.isbn,
      pages: values.pages,
      imageUrl: values.imageUrl,
      publish: {
        lastNo: values.lastNo,
        lastDate: values.lastDate,
        firstDate: values.firstDate,
      },
    }

    const confirmText = 'Bu işlemi gerçekleştirmek istediğinizden emin misiniz?'
    if (confirm(confirmText) === true) {
      const res = await updateBook({ id, data })

      setIsUpdating(false)
      setOpen(false)

      if (res.status === 'success') {
        toast({
          variant: 'success',
          title: res.message,
          description: 'Güncellenen Kitap: ' + book.title,
        })
      } else {
        toast({
          variant: 'destructive',
          title: res.message,
        })
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 px-10"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fiyat</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Örn: 50"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Kitap fiyatı sadece rakamlardan oluşmalıdır.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Örn: 118-115-11440-3-1"
                    {...field}
                  />
                </FormControl>
                <FormDescription>ISBN numarasını giriniz.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sayfa Sayısı</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Örn: 200"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Sayfa sayısı sadece rakamlardan oluşmalıdır.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Son Baskı Numarası</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Örn: 8"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Son Baskı Numarasını sadece rakamlardan oluşmalıdır.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>İlk Baskı Yılı</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Örn: 2023"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  İlk Baskı Yılı sadece rakamlardan oluşmalıdır.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Son Baskı Tarihi</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Örn: Mayıs 2023"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Son Baskı Tarihi ay yıl olucak şekilde olmalıdır.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Görsel Linki</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://i.ibb.co/DM0HHvg/cikis-yolu-2.webp"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Görsel linki webp formatında olmalıdır ve i.ibb.co sitesi
                  üzerinden yüklenmelidir.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={form.getValues('imageUrl')}
              alt={book.title}
              width="100"
              height="200"
            />
            <p className="text-sm text-slate-500">Görsel önizlemesi</p>
          </div>
        </div>
        <EditFormFooter isUpdating={isUpdating} />
      </form>
    </Form>
  )
}

export default EditForm
