'use client'

import { title } from '@/constants/biography/title'
import { useLanguageDirection } from '@/hooks/useLanguageDirection'

const Title = () => {
  const [language, direction] = useLanguageDirection()
  return (
    <h1
      className="page-title"
      style={{ direction: direction }}
    >
      {title[language]}
    </h1>
  )
}

export default Title
