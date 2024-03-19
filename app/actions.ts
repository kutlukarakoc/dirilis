'use server'

import Book from '@/lib/models/books.model'
import { Books } from '@/types/books'
import { connectToDB } from '@/lib/mongoose'
import { FileResponse } from '@/types/fileResponse'
import { booksSet } from '@/constants/booksSet'
import { revalidatePath } from 'next/cache'
import { ActionStatus } from '@/types/actionStatus'
import { GetBooksResponse } from '@/types/getBooksResponse'
import { convertSearchTerm } from '@/lib/utils'
import { loginSchema } from '@/lib/schemas/loginSchema'
import { SignInResponse, signIn } from 'next-auth/react'
import * as z from 'zod'

export async function getBookById(id: string): Promise<Books> {
  await connectToDB()
  const book = await Book.findOne({ _id: id }).maxTimeMS(5000)
  const formattedBook: Books = await JSON.parse(JSON.stringify(book))
  return formattedBook
}

export async function getBooks<T>({
  searchParams,
  necessaryProperties,
  includeBooksSet = false,
  limit = 12,
  sort = false,
  maxTimeMS = 5000,
}: {
  searchParams: { [key: string]: string }
  necessaryProperties: { [key in keyof Books]?: number }
  includeBooksSet?: boolean
  limit?: number
  sort?: boolean
  maxTimeMS?: number
}): Promise<GetBooksResponse<T>> {
  await connectToDB()

  const { category, search, page } = searchParams

  const categoryId = category?.split('-').at(-1)
	
  const queryObject: { title?: RegExp; 'category.id'?: string } = {}

  if (search) queryObject.title = new RegExp(convertSearchTerm(search), 'i')
  if (categoryId) queryObject['category.id'] = categoryId

  const query = Book.find(queryObject, { ...necessaryProperties, _id: 1 })
    .limit(limit)
    .skip((+page - 1) * limit)
    .maxTimeMS(maxTimeMS)

  if (sort) query.collation({ locale: 'tr' }).sort({ title: 1 })

  let books = await query

  const count = await Book.find(queryObject, necessaryProperties).count()

  if (includeBooksSet) {
    books =
      page === (count / limit).toFixed(0) ? [...books, ...booksSet] : books
  }

  return { books, count }
}

export async function updateBook({
  id,
  data,
}: {
  id: string
  data: Pick<Books, 'price' | 'isbn' | 'pages' | 'imageUrl' | 'publish'>
}): Promise<ActionStatus> {
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

export async function deleteBook(id: string): Promise<ActionStatus> {
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

export async function createBook({
  book,
}: {
  book: Omit<Books, 'id'>
}): Promise<ActionStatus> {
  try {
    await connectToDB()

    await Book.create(book)

    revalidatePath('/yonetim-tablosu')

    return {
      status: 'success',
      message: 'Kitap ekleme işlemi başarı ile tamamlanmıştır.',
    }
  } catch (error) {
    console.log('add error: ', error)
    return {
      status: 'error',
      message: 'Kitap oluştururken bir hata oluştu. Daha sonra tekrar deneyin.',
    }
  }
}

export async function uploadImage({
  file,
}: {
  file: string
}): Promise<FileResponse> {
  try {
    const formData = new FormData()
    formData.append('image', file)

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      {
        method: 'POST',
        body: formData,
      },
    )

    const result = await response.json()
    return result as FileResponse
  } catch (error) {
    console.log('image upload error: ', error)
    throw new Error('Bir hata oluştu. Daha sonra tekrar deneyin.')
  }
}

export const handleSignin = async (
  values: z.infer<typeof loginSchema>,
): Promise<SignInResponse | undefined> => {
  try {
    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
			replace: false,
    })
		console.log('handlesignin try', response)

    return response
  } catch (err) {
    console.log('login error:', err)
  }
}