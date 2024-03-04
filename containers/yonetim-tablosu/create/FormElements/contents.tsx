import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Minus, Plus } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'

const BookContents = () => {
  const { control, getValues } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    name: 'contents',
    control: control,
  })

  return (
    <div>
      <Label>İçindekiler</Label>
      {fields.map((contentField, index) => (
        <div
          className="my-2 flex items-start gap-2"
          key={contentField.id}
        >
          <FormField
            control={control}
            name={`contents.${index}.type`}
            render={({ field }) => (
              <FormItem className="w-3/12">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="text-primary-400">
                      <SelectValue placeholder="İçerik tipi seçiniz" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="title">Başlık</SelectItem>
                      <SelectItem value="subtitle">Alt Başlık</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`contents.${index}.text`}
            render={({ field }) => (
              <FormItem className="flex-1 ">
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      placeholder="Örn: 73 Kapı"
                      className="max-w-md"
                      {...field}
                    />
                    <div className="flex gap-1">
                      {index === getValues('contents').length - 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 rounded-full border-2 border-green-600 hover:!bg-transparent"
                          disabled={
                            getValues('contents')[index]['text'] === '' ||
                            getValues('contents')[index]['type'] === undefined
                          }
                          onClick={() =>
                            append({
                              type: '',
                              text: '',
                            })
                          }
                        >
                          <Plus className="text-green-600" />
                        </Button>
                      )}
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-6 w-6 rounded-full border-2 border-red-600 hover:!bg-transparent"
                        onClick={() => remove(index)}
                      >
                        <Minus className="text-red-600" />
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}
      <FormDescription className="flex items-center">
        Kitabın içindekiler bölümü olmayacak
        <span className="mx-2 grid h-4 w-4 place-content-center rounded-full border-2 border-red-600 text-header-4 text-red-600">
          -
        </span>
        işaretinden bu alanı kaldırınız.
      </FormDescription>
    </div>
  )
}

export default BookContents
