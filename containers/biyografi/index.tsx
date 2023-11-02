import Title from './title'
import SelectLanguage from './language'
import BiographySlider from './slider'
import Quote from './quote'

const BiographyContainer = () => {
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

export default BiographyContainer
