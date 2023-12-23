import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'ring-offset-white flex min-h-[100px] w-full resize-none rounded-md border border-primary-100 bg-white-50 px-3 py-2 text-paragraph-mobile text-primary-400 placeholder:text-paragraph-mobile placeholder:text-primary-500 focus:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:focus:text-paragraph-mobile md:text-paragraph-tablet md:placeholder:text-paragraph-tablet md:focus:text-paragraph-tablet xl:text-paragraph xl:placeholder:text-paragraph xl:focus:text-paragraph ',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
