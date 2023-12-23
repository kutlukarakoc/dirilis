import Details from '@/containers/iletisim/details'
import ContactForm from '@/containers/iletisim/form'
import Map from '@/containers/iletisim/map'
import MapLoading from '@/containers/iletisim/mapLoading'
import { Suspense } from 'react'

export const metadata = {
  title: 'Diriliş Yayınları | İletişim',
}

export default function Page() {
  return (
    <>
      <section>
        <h1 className="page-title">İletişim</h1>
        <Details />
      </section>
      <section>
        <div className="grid grid-cols-1 gap-y-32 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-8">
          <Suspense fallback={<MapLoading />}>
            <Map />
          </Suspense>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
