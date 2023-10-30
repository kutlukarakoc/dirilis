import { historyTexts } from '@/constants/historyText'

const HistoryContainer = () => {
  return (
    <section>
      <h1 className="page-title">Tarihçemiz</h1>
      {historyTexts.map((item, index) => (
        <p
          key={index}
          className="text-paragraph-mobile text-black-500 md:text-paragraph-tablet 2xl:text-paragraph"
        >
          {item}
        </p>
      ))}
    </section>
  )
}

export default HistoryContainer
