'use client'

import { useEffect, useState } from 'react'

export const useWindowWidth = (): number | null => {
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    setWidth(window.innerWidth)

    const handleResize = (): void => setWidth(window.innerWidth)
    handleResize()

    window.addEventListener('resize', handleResize)

    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
