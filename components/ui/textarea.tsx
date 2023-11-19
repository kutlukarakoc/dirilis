import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'ring-offset-white flex min-h-[100px] w-full resize-none rounded-md border border-primary-100 bg-white-50 px-3 py-2 text-primary-400 placeholder:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-paragraph-mobile md:text-paragraph-tablet xl:text-paragraph focus:text-base sm:focus:text-paragraph-mobile md:focus:text-paragraph-tablet xl:focus:text-paragraph placeholder:text-paragraph-mobile md:placeholder:text-paragraph-tablet xl:placeholder:text-paragraph ',
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
