import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import { useFormContext } from 'react-hook-form'
import { Dispatch, SetStateAction, useState } from 'react'
import { convertFileToBase64 } from '@/lib/utils'

type BookImage = {
  image: string
  setImage: Dispatch<SetStateAction<string>>
}

const BookImage = ({ image, setImage }: BookImage) => {
  const { control, getValues } = useFormContext()

  const [isConverting, setIsConverting] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center">
      <FormField
        control={control}
        name="imageUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex flex-col items-center justify-center">
              <p className="mb-2">Kitap Görseli</p>
              {image ? (
                <Image
                  src={image}
                  alt={getValues('title')}
                  width="100"
                  height="200"
                />
              ) : (
                <div className="flex h-[150px] w-[100px] flex-col items-center justify-center gap-4 border border-primary-200 text-center text-paragraph-mobile">
                  Görsel Yok
                  {isConverting && <Loader2 className="h-2 w-2 animate-spin" />}
                </div>
              )}
              <div className="mt-4 cursor-pointer rounded-md border border-primary-100 bg-white-50 px-3 py-2">
                Görsel Seç
              </div>
            </FormLabel>
            <FormControl>
              <Input
                className="hidden"
                type="file"
                onChange={async (e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setIsConverting(true)
                    const base64String = await convertFileToBase64(file)
                    setImage(base64String)
                    setIsConverting(false)
                  }
                  field.onChange(e)
                }}
              />
            </FormControl>
            <FormDescription>Görsel webp formatında olmalıdır.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default BookImage
