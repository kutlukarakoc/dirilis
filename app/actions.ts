'use server'

import Book from '../lib/models/books.model'
import { UpdateBook } from '@/types/updateBook'
import { connectToDB } from '../lib/mongoose'
import { revalidatePath } from 'next/cache'
import { signIn } from 'next-auth/react'
import * as z from 'zod'
import { loginSchema } from '@/lib/schemas/loginSchema'

export async function updateBook({
  id,
  data,
}: {
  id: string
  data: UpdateBook
}) {
  try {
    await connectToDB()

    await Book.findByIdAndUpdate(id, data)

    revalidatePath('/yonetim-tablosu')

    return {
      status: 'success',
      message: 'Güncelleme işlemi başarı ile tamamlanmıştır.',
    }
  } catch (error) {
    console.log('update error: ', error)
    return {
      status: 'error',
      message: 'Bir hata oluştu. Daha sonra tekrar deneyin.',
    }
  }
}

export async function deleteBook(id: string) {
  try {
    await connectToDB()

    await Book.findByIdAndDelete(id)

		revalidatePath('/yonetim-tablosu')

    return {
      status: 'success',
      message: 'Silme işlemi başarı ile tamamlanmıştır.',
    }
  } catch (error) {
    console.log('delete error: ', error)
    return {
      status: 'error',
      message: 'Bir hata oluştu. Daha sonra tekrar deneyin.',
    }
  }
}

export async function addBook({ book }: { book: any }) {
  try {
    await connectToDB()
    const newBook = await Book.create({ book })

		revalidatePath('/yonetim-tablosu')

    return {
      status: 'success',
      message: 'Ekleme işlemi başarı ile tamamlanmıştır.',
      newBook: JSON.parse(JSON.stringify(newBook)),
    }
  } catch (error) {
    console.log('add error: ', error)
    return 'Bir hata oluştu. Daha sonra tekrar deneyin.'
  }
}

export async function handleSignin(values: z.infer<typeof loginSchema>) {
	const response = await signIn('credentials', {
		email: values.email,
		password: values.password,
		redirect: false,
	})

	return response
}