import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ContentTexts from './contentTexts'
import { Content } from '@/types/books'

const ShowMore = ({
  windowWidth,
  contents,
}: {
  windowWidth: number
  contents: Content[]
}) => {
  return (
    <Dialog>
      <DialogTrigger className='w-max mt-2'>
        <div className={windowWidth > 500 ? 'pl-8 flex' : ''}>
          <div
            className="transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-primary-700 hover:text-primary-900 underline-offset-4 underline text-paragraph-mobile md:text-paragraph-tablet xl:text-paragraph"
          >
            Tümünü Gör
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>İçindekiler</DialogTitle>
            <DialogDescription>
              {contents.map((content, index) => (
                <ContentTexts
                  key={index}
                  content={content}
                />
              ))}
            </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ShowMore
