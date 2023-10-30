import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

export const Submit = ({ sending }: { sending: boolean }) => {
  return (
    <Button
      type="submit"
      size="lg"
      className="mt-10"
      disabled={sending}
      aria-disabled={sending}
    >
      {sending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Gönderiliyor
        </>
      ) : (
        'Mail Gönder'
      )}
    </Button>
  )
}
