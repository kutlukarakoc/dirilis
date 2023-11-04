import Details from '@/containers/iletisim/details'
import ContactForm from '@/containers/iletisim/form'
import Map from '@/containers/iletisim/map'
import MapLoading from '@/containers/iletisim/mapLoading'
import { Suspense } from 'react'

export const metadata = {
  title: 'Diriliş Yayınları | İletişim',
}

export default function Contact() {
  return (
		<>
			<section>
				<h1 className="page-title">İletişim</h1>
				<div className="flex flex-col items-center justify-center space-y-10 lg:h-[590px] lg:flex-row lg:justify-between lg:space-y-0">
					<Suspense fallback={<MapLoading />}>
						<Map />
					</Suspense>
					<Details />
				</div>
			</section>
			<section>
				<ContactForm />
			</section>
		</>
	)
}
