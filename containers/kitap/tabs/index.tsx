import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import Properties from './properties'
import Contents from './contents'
import { Books } from '@/types/books'
import Trigger from './trigger'

const BookTabs = ({ book }: { book: Books }) => {
  const triggers = [
    {
      value: 'summary',
      title: 'Künye',
      disabled: book.summary && book.summary.length > 0 ? false : true,
    },
    {
      value: 'contents',
      title: 'İçindekiler',
      disabled: book.contents && book.contents.length > 0 ? false : true,
    },
    {
      value: 'properties',
      title: 'Özellikler',
      disabled: false,
    },
  ]

  return (
    <div className="min-h-[368px] md:w-11/12">
      <Tabs
        defaultValue="summary"
        className="w-full"
      >
        <TabsList className="mb-9 flex items-center justify-between md:mb-12 xl:mb-16">
          {triggers.map((trigger) => (
            <Trigger
              key={trigger.value}
              value={trigger.value}
              title={trigger.title}
              disable={trigger.disabled}
            />
          ))}
        </TabsList>
        {book.summary && (
          <TabsContent value="summary">{book.summary}</TabsContent>
        )}

        {book.contents && (
          <TabsContent value="contents">
            <Contents contents={book.contents} />
          </TabsContent>
        )}

        <TabsContent value="properties">
          <Properties
            isbn={book.isbn}
            publish={book.publish}
            thickness={book.thickness}
            dimension={book.dimension}
            pages={book.pages}
            category={book.category.name}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default BookTabs
