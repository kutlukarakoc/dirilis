'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FileEdit } from "lucide-react"
import { BookManagement } from "@/types/bookManagament"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { updateBookSchema } from "@/lib/schemas/updateBookSchema"
import { Button } from "@/components/ui/button"

const Edit = ({ book }: { book: BookManagement }) => {
	const form = useForm<z.infer<typeof updateBookSchema>>({
    resolver: zodResolver(updateBookSchema),
    defaultValues: {
			price: book.price,
			pages: book.pages,
			isbn: book.isbn,
			lastNo: book.publish.lastNo,
			firstDate: book.publish.firstDate,
			lastDate: book.publish.lastDate
    },
  })

  function onSubmit(values: z.infer<typeof updateBookSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

	return (
		<Dialog>
			<DialogTrigger asChild>
				<FileEdit className="cursor-pointer text-primary-600" />
			</DialogTrigger>
			<DialogContent className="px-10 sm:max-w-3xl">
				<DialogHeader>
					<DialogTitle>Kitabı Düzenle</DialogTitle>
					<DialogDescription className="text-center text-header-6">
						{book.title}
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<FormField
								control={form.control}
								name="price"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Fiyat</FormLabel>
										<FormControl>
											<Input placeholder="Örn: 50" {...field} />
										</FormControl>
										<FormDescription>
											Kitap fiyatı sadece rakamlardan oluşmalıdır.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="isbn"
								render={({ field }) => (
									<FormItem>
										<FormLabel>ISBN</FormLabel>
										<FormControl>
											<Input placeholder="Örn: 118-115-11440-3-1" {...field} />
										</FormControl>
										<FormDescription>
											ISBN numarasını giriniz.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="pages"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Sayfa Sayısı</FormLabel>
										<FormControl>
											<Input placeholder="Örn: 200" {...field} />
										</FormControl>
										<FormDescription>
											Sayfa sayısı sadece rakamlardan oluşmalıdır.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="lastNo"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Son Baskı Numarası</FormLabel>
										<FormControl>
											<Input placeholder="Örn: 8" {...field} />
										</FormControl>
										<FormDescription>
											Son Baskı Numarasını sadece rakamlardan oluşmalıdır.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="firstDate"
								render={({ field }) => (
									<FormItem>
										<FormLabel>İlk Baskı Yılı</FormLabel>
										<FormControl>
											<Input placeholder="Örn: 2023" {...field} />
										</FormControl>
										<FormDescription>
											İlk Baskı Yılı sadece rakamlardan oluşmalıdır.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="lastDate"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Son Baskı Tarihi</FormLabel>
										<FormControl>
											<Input placeholder="Örn: Mayıs 2023" {...field} />
										</FormControl>
										<FormDescription>
											Son Baskı Tarihi ay yıl olucak şekilde olmalıdır.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<Button type="submit" size='lg' className="float-right">Güncelle</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default Edit