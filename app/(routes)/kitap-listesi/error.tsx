'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex justify-center items-center flex-col space-y-8 text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
      <h2 className='text-header-3 sm:text-header-2 text-primary-800'>Beklenmedik bir hata oluştu!</h2>
      <Button onClick={() => reset()}>Tekrar Deneyin</Button>
    </div>
  )
}
