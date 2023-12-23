import { historyTexts } from '@/constants/historyText'

export const metadata = {
  title: 'Diriliş Yayınları | Tarihçe',
}

export default function Page() {
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
