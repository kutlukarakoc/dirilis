import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import Properties from './properties'
import Contents from './contents'
import { Book } from '@/types/books'
import Trigger from './trigger'

const BookTabs = ({ book }: { book: Book }) => {
  const triggers = [
    {
      value: 'summary',
      title: 'Kitap Özeti',
      disabled: book.summary ? false : true,
    },
    {
      value: 'contents',
      title: 'İçindekiler',
      disabled: book.contents ? false : true,
    },
    {
      value: 'properties',
      title: 'Özellikler',
      disabled: false,
    },
  ]

  return (
    <div className="md:w-11/12">
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
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default BookTabs
