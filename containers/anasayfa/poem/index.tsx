import { homePoem } from '@/constants/home/homePoem'

const Poem = () => {
  return (
    <section className="rounded-[10px] border-2 border-primary-200 p-1">
      <div className='px-4 py-8 border-2 rounded-md border-primary-200'>
        <h2 className="mb-8 bg-white-50 text-center text-header-3 text-primary-700 md:mb-28 xl:text-header-2">
          Diriliş Çağrısı
        </h2>

        <div className="mx-auto grid max-w-6xl gap-y-6 pl-0 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-8 sm:gap-y-16 md:pl-3 lg:pl-6">
          {homePoem.map((poem, index) => (
            <div key={index}>
              {poem.verse.map((verse, verseIndex) => (
                <p
                  key={verseIndex}
                  className="text-paragraph text-black-500 md:text-header-6"
                >
                  {verse}
                </p>
              ))}
            </div>
          ))}
        </div>
        <h4 className="mt-4 text-center text-paragraph md:text-header-6 xl:text-header-5">
          Sezai Karakoç / Diriliş Çağrısı (11 Temmuz 2008)
        </h4>
      </div>
    </section>
  )
}

export default Poem
