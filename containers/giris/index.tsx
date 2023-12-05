'use client'
import Logo from "@/components/logo"
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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { loginSchema } from "@/lib/schemas/loginSchema"
import { Button } from "@/components/ui/button"
import { signIn} from "next-auth/react"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Loader2 } from "lucide-react"

const Login = () => {
	const router = useRouter()

	const [error, setError] = useState<null | string>(null)
	const [loading, setLoading] = useState(false)

	const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
			email: '',
			password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
		setLoading(true)
		const res = await signIn('credentials', {
			email: values.email,
			password: values.password,
			redirect: false,
		})

		setLoading(false)
		if(res?.error) return setError(res.error)

		router.replace('/yonetim-tablosu')
  }

	return (
		<section style={{ height: '100vh' }}>
			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<Logo className="text-primary-600 mx-auto mb-10" />

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Şifre</FormLabel>
										<FormControl>
											<Input type="password" placeholder="Şifreniz" {...field} />
										</FormControl>
										<FormDescription>
											Şifrenizi giriniz.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								disabled={loading}
								aria-disabled={loading}
							>
								{loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
								Giriş Yap
							</Button>
						</form>
					</Form>

					{error && <p className="mt-8 text-center text-paragraph font-medium text-red-500">{error}</p>}
				</div>
			</div>
		</section>
	)
}

export default Login