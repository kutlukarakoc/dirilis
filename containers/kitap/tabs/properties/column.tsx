interface Property {
  key: string
  value: string | number
}

interface ColumnProps {
	properties: Property[]
	startIndex: number
	endIndex: number
}

const Column = ({ properties, startIndex, endIndex }: ColumnProps) => {
	return (
		<ul className="space-y-4 flex-1">
			{properties.slice(startIndex, endIndex).map((prop: Property) => (
				<li
					key={prop.key}
					className="text-paragraph-mobile md:text-paragraph-tablet xl:text-paragraph"
				>
					<div className="flex justify-between">
						<span className="text-primary-800">{prop.key}</span>
						<span className="mb:w-32 text-left text-black-500">{prop.value}</span>
					</div>
				</li>
			))}
		</ul>
	)
};

export default Column