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

const Login = () => {
	const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
			email: '',
			password: '',
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

	return (
		<section>
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
					
					<Button type="submit">Giriş Yap</Button>
				</form>
			</Form>

				</div>
			</div>
		</section>
	)
}

export default Login