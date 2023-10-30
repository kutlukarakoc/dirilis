'use client'

import SlideImage from './image'
import ParagraphGroup from './paragraphGroup'
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage'
import { bioSlides } from '@/constants/biography/slides'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const BiographySlider = () => {
  const [language] = useCurrentLanguage()
  return (
    <Swiper
      autoHeight={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="bio-swiper"
    >
      {bioSlides.map((item) => {
        return (
          <SwiperSlide
            key={item.alt}
            className="bio-overlay h-auto min-h-[383px] w-full bg-cover bg-no-repeat pb-5 xl:min-h-[630px] 2xl:min-h-[660px]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, .7)), url(${item.source})`,
            }}
          >
            <div className="flex w-full flex-col items-center justify-center space-y-6 px-0 py-4 sm:w-10/12 xl:space-y-10">
              <SlideImage
                source={item.source}
                alt={item.alt}
                ratio={item.ratio}
              />
              <ParagraphGroup paragraphs={item.paragraphs[language]} />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default BiographySlider
