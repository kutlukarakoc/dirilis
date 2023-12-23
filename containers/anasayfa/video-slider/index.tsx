'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Videos = () => {
  const swiperRef = useRef<any>(null)

  const slideChange = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current
      const activeVideos = swiperInstance.querySelectorAll(
        '.swiper-slide .active-video',
      )

      activeVideos.forEach((video: HTMLVideoElement) => {
        video.pause()
      })
    }
  }

  return (
    <section>
      <Swiper
        ref={swiperRef}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="videos-swiper"
        onSlideChange={slideChange}
      >
        <SwiperSlide className="h-auto">
          {({ isActive }) => (
            <video
              className={`h-[96%] w-full ${
                isActive ? 'active-video' : 'not-active'
              }`}
              controls
              poster="https://i.ibb.co/60R7RBG/son-konusma-thumbnail.webp"
            >
              <source
                src="/son_konusma.mp4"
                type="video/mp4"
              />
              <track
                kind="captions"
                label="turkish_captions"
              />
              Tarayıcınız video elementini desteklememektedir.
            </video>
          )}
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          {({ isActive }) => (
            <video
              className={`h-[96%] w-full ${
                isActive ? 'active-video' : 'not-active'
              }`}
              controls
              poster="https://i.ibb.co/cgNRW6P/yuce-dirilis-thumbnail.webp"
            >
              <source
                src="/yuce_dirilis.mp4"
                type="video/mp4"
              />
              <track
                kind="captions"
                label="turkish_captions"
              />
              Tarayıcınız video elementini desteklememektedir.
            </video>
          )}
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Videos
