interface Property {
  key: string
  value: string | number
}

interface PropertiesProps {
  isbn: string
  publish: {
    firstDate: number
    lastDate: string
    lastNo: number
  }
  thickness: string
  dimension: string
}

const Properties = ({
  isbn,
  publish,
  thickness,
  dimension,
}: PropertiesProps) => {
  const propertiesArray = [
    {
      key: 'ISBN: ',
      value: isbn || '',
    },
    {
      key: 'İlk Baskı Tarihi: ',
      value: publish.firstDate || '',
    },
    {
      key: 'Son Baskı Tarihi: ',
      value: publish.lastDate || '',
    },
    {
      key: 'Son Baskı No: ',
      value: publish.lastNo || '',
    },
    {
      key: 'Kalınlık(mm): ',
      value: thickness || '',
    },
    {
      key: 'Ebat(cm): ',
      value: dimension || '',
    },
  ]

  return (
    <div className="max-w-xs sm:w-7/12">
      <ul className="flex flex-col space-y-4">
        {propertiesArray.map((prop: Property) => (
          <li
            key={prop.key}
            className="text-paragraph-mobile md:text-paragraph-tablet xl:text-paragraph"
          >
            <div className="flex justify-between">
              <span className="text-primary-800">{prop.key}</span>
              <span className="mb:w-32 text-left text-black-500">
                {prop.value}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Properties
