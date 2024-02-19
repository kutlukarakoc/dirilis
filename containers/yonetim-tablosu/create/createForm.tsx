'use client'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { createBookSchema } from '@/lib/schemas/createBookSchema'
import { createBook, uploadImage } from '@/app/actions'
import { Dispatch, SetStateAction, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import CreateFormFooter from './createFormFooter'
import BookContents from './FormElements/contents'
import BookImage from './FormElements/image'
import BookCategory from './FormElements/category'
import BookSummary from './FormElements/summary'
import { genericInputs } from '@/constants/management-table/createForm'
import { Input } from '@/components/ui/input'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const CreateForm = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const { toast } = useToast()

  const [isUpdating, setIsUpdating] = useState(false)
  const [image, setImage] = useState('')

  const form = useForm<z.infer<typeof createBookSchema>>({
    resolver: zodResolver(createBookSchema),
    defaultValues: {
      title: '',
      price: '',
      pages: '',
      thickness: '',
      dimension: '',
      lastNo: '',
      firstDate: '',
      lastDate: '',
      isbn: '',
      category: {
        name: '',
        id: '',
      },
      imageUrl: '',
      contents: [
        {
          type: '',
          text: '',
        },
      ],
      summary: '',
    },
  })

  async function onSubmit(values: z.infer<typeof createBookSchema>) {
    setIsUpdating(true)

    const file = image.split('base64,')[1]
    const uploadImageResponse = await uploadImage({ file })

    if (!uploadImageResponse?.data?.url) {
      setIsUpdating(false)
      setOpen(false)

      return toast({
        variant: 'destructive',
        title: 'Görsel yüklenemedi, lütfen daha sonra tekrar deneyin.',
      })
    }

    const book = {
      title: values.title,
      price: Number(values.price),
      pages: Number(values.pages),
      thickness: values.thickness,
      dimension: values.dimension,
      publish: {
        lastNo: Number(values.lastNo),
        lastDate: values.lastDate,
        firstDate: Number(values.firstDate),
      },
      isbn: values.isbn,
      category: values.category,
      imageUrl: uploadImageResponse.data.url,
      contents: values.contents,
      summary: values.summary,
    }

    const res = await createBook({ book })

    setIsUpdating(false)
    setOpen(false)

    if (res.status === 'success') {
      return toast({
        variant: 'success',
        title: res.message,
        description: 'Eklenen Kitap: ' + book.title,
      })
    }

    toast({
      variant: 'destructive',
      title: res.message,
    })
  }
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 px-10"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {genericInputs.map((input) => (
            <FormField
              key={input.name}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{input.label}</FormLabel>
                  <FormControl>
                    <Input
                      type={input.type}
                      placeholder={input.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{input.description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <BookCategory />
        </div>
        {form.getValues('contents').length > 0 && <BookContents />}
        <BookSummary />
        <BookImage
          image={image}
          setImage={setImage}
        />
        <CreateFormFooter isUpdating={isUpdating} />
      </form>
    </FormProvider>
  )
}

export default CreateForm
