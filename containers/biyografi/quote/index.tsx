'use client'

import { quotes } from '@/constants/biography/quotes'
import { useLanguageDirection } from '@/hooks/useLanguageDirection'

const Quote = () => {
  const [language, direction] = useLanguageDirection()

  return (
    <div
      className="mt-32 text-center md:mt-40"
      id="bio-quote"
    >
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <p 
					className="rounded-t-md border-x border-t border-primary-400 px-1 py-4 text-paragraph-mobile lg:text-paragraph-tablet"
					style={{ direction: direction }}
				>
          {quotes.verseText[language]} <br />
          <span className="font-medium text-primary-700" style={{ direction: direction }}>
						{quotes.verse[language]}
          </span>
        </p>

        <div className="mx-auto h-1 w-[99.7%] bg-primary-400"></div>

        <div className="border-x border-primary-400 px-1 pb-8 pt-4 sm:px-8">
          <div className="border-4 border-primary-400 px-2 py-4">
            <h6
              className="mb-4 text-paragraph font-medium text-primary-700 lg:text-header-6"
              style={{ direction: direction }}
            >
              {quotes.title[language]}
            </h6>

            <div className="flex flex-col space-y-3">
              {quotes.body.map((quote, index) => (
                <p
                  key={index}
                  className="text-paragraph-mobile text-black-400 lg:text-paragraph"
                  style={{ direction: direction }}
                >
                  {quote[language]}
                </p>
              ))}
            </div>

            <p
              className="mt-4 text-paragraph-mobile font-medium text-primary-700 lg:text-paragraph"
              style={{ direction: direction }}
            >
              {quotes.footer[language]}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto h-8 max-w-3xl border border-primary-900 bg-primary-400"></div>
    </div>
  )
}

export default Quote
