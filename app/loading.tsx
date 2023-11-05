import SliderLoading from "@/containers/anasayfa/book-slider/loading"
import VideosLoading from "@/containers/anasayfa/video-slider/loading"
import PoemLoading from "@/containers/anasayfa/poem/loading"

export default function Loading() {
  return (
		<>
			<SliderLoading />
			<div className="mt-32 md:mt-40">
				<VideosLoading />
			</div>
			<div className="mt-32 md:mt-40">
				<SliderLoading />
			</div>
			<div className="mt-32 md:mt-40">
				<PoemLoading />
			</div>
		</>
	)
}