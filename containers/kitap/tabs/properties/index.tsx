import Column from "./column"

interface PropertiesProps {
  isbn: string
  publish: {
    firstDate: number
    lastDate: string
    lastNo: number
  }
  thickness: string
  dimension: string
	pages: number
	category: string
}

const Properties = ({
  isbn,
  publish,
  thickness,
  dimension,
	pages,
	category,
}: PropertiesProps) => {
  const properties= [
    {
      key: 'ISBN: ',
      value: isbn,
    },
    {
      key: 'İlk Baskı Tarihi: ',
      value: publish.firstDate,
    },
    {
      key: 'Son Baskı Tarihi: ',
      value: publish.lastDate,
    },
    {
      key: 'Son Baskı No: ',
      value: publish.lastNo,
    },
    {
      key: 'Sayfa Sayısı: ',
      value: pages,
    },
    {
      key: 'Kalınlık(mm): ',
      value: thickness,
    },
    {
      key: 'Ebat(cm): ',
      value: dimension,
    },
		{
			key: 'Kategori: ',
			value: category,
		}
  ]

  return (
		<div className="max-w-xs sm:max-w-full">
		<div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-20 xl:space-x-32 space-y-4 sm:space-y-0">
			<Column properties={properties} startIndex={0} endIndex={4} />
			<Column properties={properties} startIndex={4} endIndex={properties.length} />
		</div>
	</div>
  )
}

export default Properties
