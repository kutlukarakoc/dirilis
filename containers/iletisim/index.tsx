import { Skeleton } from '@/components/ui/skeleton'
import Details from './details'
import ContactForm from './form'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('./map'), {
  loading: () => <Skeleton className='h-56 w-full rounded-md sm:h-96 lg:h-full lg:w-7/12' />,
})

const ContactContainer = () => {
  return (
    <>
      <section>
        <h1 className="page-title">İletişim</h1>
        <div className="flex flex-col items-center justify-center space-y-10 lg:h-[590px] lg:flex-row lg:justify-between lg:space-y-0">
          <Map />
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
