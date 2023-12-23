'use client'

import ShowMore from './showMore'
import { Content } from '@/types/books'
import { useWindowWidth } from '@/hooks/useWindowWidth'
import ContentTexts from './contentTexts'

const Contents = ({ contents }: { contents: Content[] }) => {
  const windowWidth = useWindowWidth() || 400

  if (!contents || contents.length === 0) {
    return null
  }

  const maxContent = windowWidth > 500 ? 16 : 8
  const slicedContents = contents.slice(0, maxContent)
  const halfIndex = Math.ceil(slicedContents.length / 2)
  const firstColumn = slicedContents.slice(0, halfIndex)
  const secondColumn = slicedContents.slice(halfIndex)

  const renderContent = (content: Content, index: number) => (
    <ContentTexts
      key={index}
      content={content}
    />
  )

  return (
    <>
      {slicedContents.length <= 9 ? (
        <div>{slicedContents.map(renderContent)}</div>
      ) : (
        <div className="grid grid-cols-2">
          <div>{firstColumn.map(renderContent)}</div>
          <div className="pl-8">{secondColumn.map(renderContent)}</div>
        </div>
      )}
      {contents.length > maxContent && (
        <div className={windowWidth > 500 ? 'grid grid-cols-2' : ''}>
          <div></div>
          <ShowMore
            windowWidth={windowWidth}
            contents={contents}
          />
        </div>
      )}
    </>
  )
}

export default Contents
