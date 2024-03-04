import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Edit from './edit'
import Delete from './delete'
import { formatHref, formatPrice } from '@/lib/utils'
import { BookManagement } from '@/types/bookManagament'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ManagementTable = ({ books }: { books: BookManagement[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[600px]">Kitap İsmi</TableHead>
          <TableHead className="w-56">Fiyat</TableHead>
          <TableHead className="w-24">Düzenle</TableHead>
          <TableHead className="w-24">Sil</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book: BookManagement) => (
          <TableRow key={book.id}>
            <TableCell>
              <Button
                asChild
                variant="link"
              >
                <Link
                  href={formatHref('kitap', book.title, book.id)}
                  prefetch={false}
                >
                  {book.title}
                </Link>
              </Button>
            </TableCell>
            <TableCell>{formatPrice(book.price)}</TableCell>
            <TableCell>
              <Edit book={book} />
            </TableCell>
            <TableCell className="text-right">
              <Delete
                id={book.id}
                title={book.title}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ManagementTable
