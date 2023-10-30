import Title from './title'
import Language from './language'
import BiographySlider from './slider'
import Quote from './quote'

const BiographyContainer = () => {
  return (
    <section>
      <div className="flex items-start justify-between">
        <Title />
        <Language />
      </div>
      <BiographySlider />
      <Quote />
    </section>
  )
}

export default BiographyContainer
