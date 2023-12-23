import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Check, X } from 'lucide-react'
import { MailModal } from '@/types/mailModal'
import { MutableRefObject } from 'react'

const texts = {
  success: 'Mailiniz başarı ile iletilmiştir.',
  failed: 'Bir hata oluştu. Daha sonra tekrar deneyin.',
}

const Modal = ({
  mail,
  modalTrigger,
}: {
  mail: MailModal
  modalTrigger: MutableRefObject<HTMLButtonElement | null>
}) => {
  return (
    <Dialog>
      <DialogTrigger
        className="hidden"
        ref={modalTrigger}
      >
        trigger
      </DialogTrigger>
      <DialogContent className="!h-[400px]">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary-900">
            {mail.status && mail.status === 'success' ? (
              <Check
                size={48}
                color="#ffffff"
              />
            ) : (
              <X
                size={48}
                color="#ffffff"
              />
            )}
          </div>
          <h4 className="text-header-5 text-primary-800 md:text-header-4">
            {mail.status && texts[mail.status]}
          </h4>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
