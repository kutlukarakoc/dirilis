import type { Metadata } from 'next'
import Favicon from '@/public/favicon.png'
import VideosLoading from '@/containers/anasayfa/videos/loading'
import Quotes from '@/containers/anasayfa/slider'
import SliderLoading from '@/containers/anasayfa/slider/loading'
import PoemLoading from '@/containers/anasayfa/poem/loading'
import { heroQuotes } from '@/constants/home/heroQuotes'
import { secondaryQuotes } from '@/constants/home/secondaryQuotes'
import dynamic from 'next/dynamic'
const Videos = dynamic(() => import('../containers/anasayfa/videos'), {
  loading: () => <VideosLoading />,
})
const SecondaryQuotes = dynamic(() => import('../containers/anasayfa/slider'), {
  loading: () => <SliderLoading />,
})
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

export default function Home() {
  return (
    <>
      <Quotes
        quotesData={heroQuotes}
        wrapperClass="hero-quotes-swiper"
      />
      <Videos />
      <SecondaryQuotes
        quotesData={secondaryQuotes}
        wrapperClass="secondary-quotes-swiper"
      />
      <Poem />
    </>
  )
}
