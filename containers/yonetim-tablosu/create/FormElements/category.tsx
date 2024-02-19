import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { categories } from '@/constants/categories'
import { useFormContext } from 'react-hook-form'

const BookCategory = () => {
  const { control, setValue, trigger } = useFormContext()

  return (
    <FormField
      control={control}
      name="category"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Kategori</FormLabel>
          <Select
            onValueChange={(value) => {
              setValue('category', {
                name: value.split('-')[0],
                id: value.split('-')[1],
              })
              trigger('category')
            }}
            defaultValue={field.value.id}
          >
            <FormControl>
              <SelectTrigger className="text-primary-400">
                <SelectValue placeholder="Kategori Seçiniz" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem
                  value={category.name + '-' + category.id}
                  key={category.id}
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>Kategori seçiniz</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default BookCategory
