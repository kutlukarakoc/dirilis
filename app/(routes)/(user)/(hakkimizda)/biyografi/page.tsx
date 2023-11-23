import Title from '@/containers/biyografi/title'
import SelectLanguage from '@/containers/biyografi/language'
import BiographySlider from '@/containers/biyografi/slider'
import Quote from '@/containers/biyografi/quote'

export const metadata = {
  title: 'Diriliş Yayınları | Biyografi',
}

export default function Biography() {
  return (
		<section>
			<div className="flex items-start justify-between">
				<Title />
				<SelectLanguage />
			</div>
			<BiographySlider />
			<Quote />
		</section>
	)
}
