'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Videos = () => {
  return (
    <section>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="videos-swiper"
      >
        <SwiperSlide className="h-auto">
          <video
            className="h-[96%] w-full"
            controls
						poster='https://i.ibb.co/3sh7xxn/son-konusma-thumbnail.png'
          >
            <source
              src="/son_konusma.mp4"
              type="video/mp4"
            />
            Tarayıcınız video elementini desteklememektedir.
          </video>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <video
            className="h-[96%] w-full"
						poster='https://i.ibb.co/xsxX4W8/yuce-dirilis-thumbnail.png'
            controls
          >
            <source
              src="/yuce_dirilis.mp4"
              type="video/mp4"
            />
            Tarayıcınız video elementini desteklememektedir.
          </video>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Videos
