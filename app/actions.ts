'use server'

import Book from '@/lib/models/books.model'
import { connectToDB } from '@/lib/mongoose'
import { UpdateBook } from '@/types/updateBook'
import { FileResponse } from '@/types/fileResponse'
import { revalidatePath } from 'next/cache'

export async function getBookById(id: string) {
  await connectToDB()
  const book = await Book.findOne({ _id: id }).maxTimeMS(5000)
  const formattedBook = await JSON.parse(JSON.stringify(book))
  return formattedBook
}

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

export async function createBook({ book }: { book: any }) {
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