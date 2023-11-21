'use client'

import { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import emailjs from '@emailjs/browser'
import { contactSchema } from '@/lib/schemas/contactSchema'
import Modal from './modal'
import { Textarea } from '@/components/ui/textarea'
import { Submit } from './submit'
import { MailModal } from '@/types/mailModal'
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

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const modalTrigger = useRef<HTMLButtonElement | null>(null)

  const [mail, setMail] = useState<MailModal>({
    sending: false,
    status: null,
  })

  useEffect(() => {
    return () => setMail({ status: null, sending: false })
  }, [])

	const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
			surname: '',
			email: '',
			phone: '',
			message: '',
    },
  })

	function onSubmit() {
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
				form.reset()
      })
      .catch(() => {
        setMail((prevMail) => ({ ...prevMail, status: 'failed' }))
        modalTrigger.current &&
          (modalTrigger.current as HTMLButtonElement).click()
      })
      .finally(() => setMail((prevMail) => ({ ...prevMail, sending: false })))
  }

  return (
    <aside>
      <h2 className="section-title">İletişim Formu</h2>
			<Form {...form}>
				<form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-7'>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Ad</FormLabel>
									<FormControl>
										<Input placeholder="Adınız" {...field} />
									</FormControl>
									<FormDescription>
										Adınızı giriniz.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="surname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Soyad</FormLabel>
									<FormControl>
										<Input placeholder="Soyadınız" {...field} />
									</FormControl>
									<FormDescription>
										Soyadınızı giriniz.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="Email adresiniz" {...field} />
									</FormControl>
									<FormDescription>
										Email adresinizi giriniz.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Telefon Numarası</FormLabel>
									<FormControl>
										<Input placeholder="Telefon numaranız" {...field} />
									</FormControl>
									<FormDescription>
										Telefon numaranızı giriniz.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Mesaj</FormLabel>
								<FormControl>
									<Textarea placeholder="Mesajınız" className="min-h-[150px]" {...field} />
								</FormControl>
								<FormDescription>
									Mesajınızı giriniz.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
						<Submit sending={mail.sending} />
				</form>
			</Form>
      <Modal
        mail={mail}
        modalTrigger={modalTrigger}
      />
    </aside>
  )
}

export default ContactForm
