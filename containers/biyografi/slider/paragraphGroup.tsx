'use client'

import { useState } from 'react'
import { useWindowWidth } from '@/hooks/useWindowWidth'
import { useLanguageDirection } from '@/hooks/useLanguageDirection'
import { Button } from '@/components/ui/button'
import Paragraph from './paragraph'
import { showMoreTexts } from '@/constants/biography/showMore'

type ParagraphGroup = {
  paragraphs: string[]
}

const ParagraphGroup: React.FC<ParagraphGroup> = ({ paragraphs }) => {
  const [language, direction] = useLanguageDirection()

  const [showMore, setShowMore] = useState(false)
  const windowWidth = useWindowWidth() || 1000

  const isDesktop = windowWidth > 1536
  const hiddenIndex = windowWidth < 640 ? 0 : windowWidth < 1024 ? 1 : 3
  const hiddenLength = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 4

  const handleReadMoreClick = () => {
    setShowMore(!showMore)
    const activeBullet: HTMLElement = document.querySelector(
      '.swiper-pagination-bullet-active',
    ) as HTMLElement
    activeBullet &&
      setTimeout(() => {
        activeBullet.click()
      })
  }

  return (
    <div
      className="w-full space-y-1"
      style={{ direction: direction }}
    >
      {paragraphs?.map((paragraph, index) => (
        <Paragraph
          key={`bio-p-${index}`}
          className={
            !isDesktop && index > hiddenIndex && !showMore ? 'hidden' : 'block'
          }
        >
          {paragraph}
        </Paragraph>
      ))}

      {paragraphs.length > hiddenLength && !isDesktop && (
        <Button
          variant="link"
          onClick={handleReadMoreClick}
          className="text-black-500 hover:text-black-500 sm:text-white-50 sm:hover:text-white-50"
          style={{ direction: direction }}
        >
          {!showMore
            ? showMoreTexts.show[language]
            : showMoreTexts.hide[language]}
        </Button>
      )}
    </div>
  )
}

export default ParagraphGroup
