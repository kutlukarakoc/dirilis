'use client'

import { title } from '@/constants/biography/title'
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage'

const Title = () => {
  const [language, direction] = useCurrentLanguage()
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
