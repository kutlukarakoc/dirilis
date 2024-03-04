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
import { updateBook, uploadImage } from '@/app/actions'
import { Dispatch, SetStateAction, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { BookManagement } from '@/types/bookManagament'
import EditFormFooter from './editFormFooter'
import { convertFileToBase64 } from '@/lib/utils'

interface EditForm {
  book: BookManagement
  setOpen: Dispatch<SetStateAction<boolean>>
}

const EditForm = ({ book, setOpen }: EditForm) => {
  const { toast } = useToast()

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

  const [isUpdating, setIsUpdating] = useState(false)
  const [currentImageUrl, setCurrentImageUrl] = useState<string>(
    form.getValues('imageUrl'),
  )

  async function onSubmit(values: z.infer<typeof updateBookSchema>) {
    setIsUpdating(true)

    const id = book.id
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

    if (!currentImageUrl.startsWith('http')) {
      const file = currentImageUrl.split('base64,')[1]
      const uploadImageResponse = await uploadImage({ file })

      if (uploadImageResponse.success) {
        data.imageUrl = uploadImageResponse.data.url
      }
    }

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
        <div className="flex flex-col items-center justify-center">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='flex flex-col justify-center items-center'>
                  <p className="mb-2">Kitap Görseli</p>
                  <Image
                    src={currentImageUrl}
                    alt={book.title}
                    width="100"
                    height="200"
                  />
									<div className='mt-4 rounded-md border border-primary-100 bg-white-50 px-3 py-2 cursor-pointer'>Yeni Görsel Seç</div>
                </FormLabel>
                <FormControl>
                  <Input
                    className="hidden"
                    type="file"
                    onChange={async (e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        const base64String = await convertFileToBase64(file)
                        setCurrentImageUrl(base64String)
                      }
                      field.onChange(e)
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Görsel webp formatında olmalıdır.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <EditFormFooter isUpdating={isUpdating} />
      </form>
    </Form>
  )
}

export default EditForm
