import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    pages: { type: Number, required: true },
    thickness: { type: String, required: true },
    dimension: { type: String, required: true },
    publish: {
      lastNo: { type: Number, required: true },
      firstDate: { type: Number, required: true },
      lastDate: { type: String, required: true },
    },
    isbn: { type: String, required: true },
    category: {
      name: { type: String, required: true },
      id: { type: String, required: true },
    },
    imageUrl: { type: String, required: true },
    contents: [
      {
        type: { type: String, required: false },
        text: { type: String, required: false },
      },
    ],
    summary: { type: String, required: true },
  },
  {
    versionKey: false,
  },
)

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema)

export default Book
