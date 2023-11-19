import { Phone, Mail, MapPin, Landmark } from 'lucide-react'

const Details = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-8 sm:gap-x-24">
      <div className="shadow flex h-[186px] flex-col items-center justify-center px-2 last-of-type:mb-0">
        <h4 className="mb-2 flex items-center text-header-6 text-primary-500 md:mb-4 md:text-header-5 2xl:text-header-4">
          <Phone strokeWidth={1} aria-label='Phone icon' />
          <span className="ml-2">Telefon Numaraları</span>
        </h4>
        <h6 className="mb-2 text-center text-paragraph-tablet text-black-500 last-of-type:mb-0 2xl:text-paragraph">
          0 (212) 519 04 57
        </h6>
				<h6 className="mb-2 text-center text-paragraph-tablet text-black-500 last-of-type:mb-0 2xl:text-paragraph">
          0 (532) 422 25 50
        </h6>
        <h6 className="text-center text-paragraph-tablet text-black-500 last-of-type:mb-0 2xl:text-paragraph">
          0 (532) 353 73 10
        </h6>
      </div>

      <div className="shadow flex h-[186px] flex-col items-center justify-center px-2 last-of-type:mb-0">
        <h4 className="mb-2 flex items-center text-header-6 text-primary-500 md:mb-4 md:text-header-5 2xl:text-header-4">
          <Mail strokeWidth={1} aria-label='Mail icon' />
          <span className="ml-2">E-mail Adresleri</span>
        </h4>
        <h6 className="mb-4 text-center text-paragraph-tablet text-black-500 last-of-type:mb-0 2xl:text-paragraph">
          dirilis@dirilisyayinlari.gen.tr
        </h6>
      </div>

      <div className="shadow flex h-[186px] flex-col items-center justify-center px-2 last-of-type:mb-0">
        <h4 className="mb-2 flex items-center text-header-6 text-primary-500 md:mb-4 md:text-header-5 2xl:text-header-4">
          <MapPin strokeWidth={1} aria-label='Map icon' />
          <span className="ml-2">Açık Adres</span>
        </h4>
        <h6 className="mb-4 text-center text-paragraph-tablet text-black-500 last-of-type:mb-0 2xl:text-paragraph">
          Molla Gürani Caddesi, Aras Apartmanı, No: 57, Daire: 1, Fındıkzade
          <br /> Fatih / İstanbul
        </h6>
      </div>

			<div className="shadow flex h-[186px] flex-col items-center justify-center px-2 last-of-type:mb-0">
        <h4 className="mb-2 flex items-center text-header-6 text-primary-500 md:mb-4 md:text-header-5 2xl:text-header-4">
          <Landmark strokeWidth={1} aria-label='Bank icon' />
          <span className="ml-2">IBAN</span>
        </h4>
        <h6 className="mb-4 text-center text-paragraph-tablet text-black-500 last-of-type:mb-0 2xl:text-paragraph">
          Abdulaziz Karakoç Diriliş Yayınları Kuveyttürk Fındıkzade Şubesi
          <br /> TR17 0020 5000 0984 5689 5000 01
        </h6>
      </div>
    </div>
  )
}

export default Details