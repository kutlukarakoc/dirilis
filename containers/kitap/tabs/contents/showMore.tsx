import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ContentTexts from './contentTexts'
import { Content } from '@/types/books'
import { ScrollArea } from '@/components/ui/scroll-area'

const ShowMore = ({
  windowWidth,
  contents,
}: {
  windowWidth: number
  contents: Content[]
}) => {
  return (
    <Dialog>
      <DialogTrigger className="mt-2 w-max">
        <div className={windowWidth > 500 ? 'flex pl-8' : ''}>
          <div className="text-paragraph-mobile text-primary-700 underline underline-offset-4 transition-colors hover:text-primary-900 disabled:cursor-not-allowed disabled:opacity-50 md:text-paragraph-tablet xl:text-paragraph">
            Tümünü Gör
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>İçindekiler</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full w-full px-6">
          {contents.map((content, index) => (
            <ContentTexts
              key={index}
              content={content}
            />
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default ShowMore
