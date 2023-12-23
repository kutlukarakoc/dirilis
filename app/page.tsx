import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Favicon from '@/public/favicon.png'
import VideosLoading from '@/containers/anasayfa/video-slider/loading'
import Quotes from '@/containers/anasayfa/book-slider'
import SliderLoading from '@/containers/anasayfa/book-slider/loading'
import PoemLoading from '@/containers/anasayfa/poem/loading'
import { heroQuotes } from '@/constants/home/heroQuotes'
import { secondaryQuotes } from '@/constants/home/secondaryQuotes'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const Videos = dynamic(() => import('../containers/anasayfa/video-slider'), {
  loading: () => <VideosLoading />,
})
const SecondaryQuotes = dynamic(
  () => import('../containers/anasayfa/book-slider'),
  {
    loading: () => <SliderLoading />,
  },
)
const Poem = dynamic(() => import('../containers/anasayfa/poem'), {
  loading: () => <PoemLoading />,
})

export const metadata: Metadata = {
  title: 'Diriliş Yayınları',
  description: "Sezai Karakoç'un kitaplarının tanıtıldığı website.",
  openGraph: {
    title: 'Diriliş Yayınları',
    description: "Sezai Karakoç'un kitaplarının tanıtıldığı website.",
    siteName: 'Diriliş Yayınları',
    type: 'website',
  },
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="container relative my-20 flex-1 md:my-32">
        <Suspense fallback={<SliderLoading />}>
          <Quotes
            quotesData={heroQuotes}
            wrapperClass="hero-quotes-swiper"
          />
        </Suspense>
        <Suspense fallback={<VideosLoading />}>
          <Videos />
        </Suspense>
        <Suspense fallback={<SliderLoading />}>
          <SecondaryQuotes
            quotesData={secondaryQuotes}
            wrapperClass="secondary-quotes-swiper"
          />
        </Suspense>
        <Suspense fallback={<PoemLoading />}>
          <Poem />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
