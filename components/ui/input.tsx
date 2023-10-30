import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'ring-offset-white flex h-10 w-full rounded-md border border-primary-100 bg-white-50 px-3 py-2 text-paragraph-mobile text-primary-400 file:border-0 placeholder:text-paragraph-mobile placeholder:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-paragraph-tablet xl:text-paragraph',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
