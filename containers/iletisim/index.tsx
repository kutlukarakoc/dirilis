import Details from './details'
import ContactForm from './form'
import MapLoading from './mapLoading'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const Map = dynamic(() => import('./map'), {
  loading: () => <MapLoading />,
})

const ContactContainer = () => {
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

export default ContactContainer
