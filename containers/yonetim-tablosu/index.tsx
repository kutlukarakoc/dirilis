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
import { formatPrice } from '@/lib/utils'
import { BookManagement } from '@/types/bookManagament'

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
          <TableRow key={book._id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{formatPrice(book.price)}</TableCell>
            <TableCell>
              <Edit book={book} />
            </TableCell>
            <TableCell className="text-right">
              <Delete />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ManagementTable
