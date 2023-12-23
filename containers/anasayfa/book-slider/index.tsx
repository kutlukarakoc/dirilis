'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import QuoteImage from './image'

interface Quotes {
  image: string
  quote: {
    text: string[]
    book: string
  }
}

const Slider = ({
  quotesData,
  wrapperClass,
}: {
  quotesData: Quotes[]
  wrapperClass: string
}) => {
  return (
    <section>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`quotes-swiper ${wrapperClass}`}
      >
        {quotesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="mx-auto flex h-full w-full flex-col items-center justify-start space-y-4 py-2 sm:w-[90%] sm:justify-center md:flex-row md:space-x-4 md:space-y-0 md:py-0 lg:space-x-8 xl:space-x-14 2xl:space-x-20">
              <QuoteImage
                book={item.quote.book}
                image={item.image}
                index={index}
              />
              <div className="w-full text-paragraph-mobile text-black-500 md:max-w-sm md:text-paragraph-tablet xl:max-w-xl xl:text-paragraph 2xl:max-w-2xl">
                {item.quote.text.map((text, textIndex) => (
                  <p key={textIndex}>{text}</p>
                ))}
                <p className="mt-2 sm:mt-4">{item.quote.book}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Slider
