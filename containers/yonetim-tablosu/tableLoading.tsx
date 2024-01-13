import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function TableLoading() {
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
        {Array.from({ length: 10 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="h-4 w-96" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-16" />
            </TableCell>
            <TableCell>
						<Skeleton className="w-6 h-6" />
            </TableCell>
            <TableCell className="text-right">
              <Skeleton className='w-6 h-6' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
