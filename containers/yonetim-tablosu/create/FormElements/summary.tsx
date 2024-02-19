import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { useFormContext } from 'react-hook-form'

const MAXIMUM_CHAR = 1250
const DEFAULT_DESCRIPTION = 'Kitap özeti en fazla 1250 karakterden oluşmalıdır.'
const OVER_MAXIMUM_CHAR_DESCRIPTION = 'Kitap özeti 1250 karakteri geçmemelidir.'

const BookSummary = () => {
  const { control, getValues } = useFormContext()

  return (
    <FormField
      control={control}
      name="summary"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Özet</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Kitap özeti"
              className="h-60 resize-none"
              {...field}
            />
          </FormControl>
          <FormDescription>
            {getValues('summary').length
              ? MAXIMUM_CHAR - getValues('summary').length > 0
                ? MAXIMUM_CHAR - getValues('summary').length + ' karakter girilebilir.'
                : OVER_MAXIMUM_CHAR_DESCRIPTION
              : DEFAULT_DESCRIPTION}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default BookSummary
