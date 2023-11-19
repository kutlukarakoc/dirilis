'use client'

import { useState, useRef, FormEvent, useEffect } from 'react'
import Modal from './modal'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Submit } from './submit'
import emailjs from '@emailjs/browser'
import { MailModal } from '@/types/mailModal'

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const modalTrigger = useRef<HTMLButtonElement | null>(null)

  const [mail, setMail] = useState<MailModal>({
    sending: false,
    status: null,
  })

  const sendForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setMail((prevMail) => ({ ...prevMail, sending: true }))
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_MAIL_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID || '',
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY,
      )
      .then(() => {
        setMail((prevMail) => ({ ...prevMail, status: 'success' }))
        modalTrigger.current &&
          (modalTrigger.current as HTMLButtonElement).click()
				formRef.current && formRef.current.reset()
      })
      .catch(() => {
        setMail((prevMail) => ({ ...prevMail, status: 'failed' }))
        modalTrigger.current &&
          (modalTrigger.current as HTMLButtonElement).click()
      })
      .finally(() => setMail((prevMail) => ({ ...prevMail, sending: false })))
  }

  useEffect(() => {
    return () => setMail({ status: null, sending: false })
  }, [])
	
	const cancelZoom = () => {
		// @ts-ignore 
		document.body.style.zoom = null
	}
	

  return (
    <aside>
      <h2 className="section-title">İletişim Formu</h2>
      <form
        ref={formRef}
        onSubmit={sendForm}
				className='max-w-2xl'
      >
        <Label>Mesajınız</Label>
        <Textarea
          placeholder="Mesajınızı giriniz"
          className="my-1.5 min-h-[150px]"
          name="message"
					required
					onBlur={cancelZoom}
        />
        <p className="text-paragraph-mobile text-primary-400 md:text-paragraph-tablet xl:text-paragraph">
          Mesajınız bize iletilecektir.
        </p>
        <Submit sending={mail.sending} />
      </form>
      <Modal
        mail={mail}
        modalTrigger={modalTrigger}
      />
    </aside>
  )
}

export default ContactForm
