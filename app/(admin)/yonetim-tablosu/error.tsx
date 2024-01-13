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
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-8 text-center">
      <h2 className="text-header-3 text-primary-800 sm:text-header-2">
        Beklenmedik bir hata oluştu!
      </h2>
      <Button onClick={() => reset()}>Tekrar Deneyin</Button>
    </div>
  )
}
