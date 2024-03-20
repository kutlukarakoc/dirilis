import { AlertCircle } from 'lucide-react'

export const FormError = ({ message }: { message: string }) => {
  if (!message) return null

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-red-200/50 p-3 text-paragraph-tablet text-red-600">
      <AlertCircle
        className="h-4 w-4"
        color="#d93e3e"
      />
      {message}
    </div>
  )
}
