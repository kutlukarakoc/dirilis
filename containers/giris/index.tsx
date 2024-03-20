'use client'
import Logo from '@/components/logo'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { FormError } from './form-error'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { loginSchema } from '@/lib/schemas/loginSchema'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { handleSignin } from '@/lib/utils'

const Login = () => {
  const router = useRouter()

  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState(false)

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsPending(true)
    setError('')

    handleSignin(values).then(
      (res: { status: 'success' | 'error'; message: string }) => {
        setIsPending(false)
        if (res.status === 'error') {
          setError(res.message)
          return
        }
        router.push('/yonetim-tablosu')
      },
    )
  }

  return (
    <section style={{ height: '100vh' }}>
      <div className="flex min-h-full flex-col justify-center bg-primary-50 px-4 sm:px-0">
        <div className="flex flex-col gap-8 rounded-md bg-white-50 p-6 sm:mx-auto sm:w-full sm:max-w-md sm:p-12">
          <Logo className="mx-auto text-primary-600" />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email adresiniz"
                        type="email"
                        disabled={isPending}
                        aria-disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Email adresinizi giriniz.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Şifre</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Şifreniz"
                        disabled={isPending}
                        aria-disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Şifrenizi giriniz.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isPending}
                aria-disabled={isPending}
                className="!mt-8 w-full"
              >
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isPending ? 'Giriş Yapılıyor' : 'Giriş Yap'}
              </Button>
            </form>
          </Form>

          <FormError message={error} />
        </div>
      </div>
    </section>
  )
}

export default Login
