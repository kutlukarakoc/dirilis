import { Content } from '@/types/books'

const ContentTexts = ({ content }: { content: Content }) => {
  return (
    <div>
      {content.heading && (
        <div className="mb-1 ml-8 font-semibold text-primary-700">{content.heading}</div>
      )}
      {'subtitle' in content && content.subtitle && (
        <div className="mb-1 flex text-paragraph-mobile md:text-paragraph-tablet xl:text-paragraph">
          <span className="inline-block w-8 min-w-[32px] text-primary-700">
            {content.subtitle.split(' ').slice(0, 1)}
          </span>
          <span className="text-black-500">
            {content.subtitle.split(' ').slice(1).join(' ')}
          </span>
        </div>
      )}
      {content.title && (
        <div className="mb-1 ml-8 font-semibold text-primary-700">{content.title}</div>
      )}
    </div>
  )
}

export default ContentTexts
