import { memo, AnchorHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { alata } from '@/app/layout'

const logoVariants = cva(`text-red-200 whitespace-nowrap ${alata.className}`, {
  variants: {
    size: {
      lg: 'text-[22px] md:text-[32px] 2xl:text-[40px]',
      md: 'text-[16px] sm:text-[17px] md:text-[32px] 2xl:text-[40px]',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

interface LogoProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof logoVariants> {}

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <Link
        href="/"
        className={cn(logoVariants({ size, className }))}
        ref={ref}
        {...props}
      >
        Diriliş Yayınları
      </Link>
    )
  },
)

Logo.displayName = 'Logo'

export default memo(Logo)
