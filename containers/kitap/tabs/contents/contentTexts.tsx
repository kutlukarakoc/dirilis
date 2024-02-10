import { Content } from '@/types/books'

const ContentTexts = ({ content }: { content: Content }) => {
  return (
    <div>
      {content.type === 'title' ? (
        <div className="mb-1 ml-8 font-semibold text-primary-700">
          {content.text}
        </div>
      ) : (
        <div className="mb-1 flex text-paragraph-mobile md:text-paragraph-tablet xl:text-paragraph">
          <span className="inline-block w-8 min-w-[32px] text-primary-700">
            {content.text.split(' ').slice(0, 1)}
          </span>
          <span className="text-black-500">
            {content.text.split(' ').slice(1).join(' ')}
          </span>
        </div>
      )}
    </div>
  )
}

export default ContentTexts
