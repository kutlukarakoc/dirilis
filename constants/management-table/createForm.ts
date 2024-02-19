type GenericInputs = {
  name:
    | 'title'
    | 'price'
    | 'pages'
    | 'thickness'
    | 'dimension'
    | 'lastNo'
    | 'firstDate'
    | 'lastDate'
    | 'isbn'
	label: string
	type: 'text' | 'number'
	placeholder: string
	description: string
}

export const genericInputs: GenericInputs[] = [
  {
    name: 'title',
    label: 'Başlık',
    type: 'text',
    placeholder: 'Örn: ÇAĞ VE İLHAM III',
    description:
      'Başlığın sitede büyük harflerle gösterilmesi için büyük harflerle yazılmalıdır.',
  },
  {
    name: 'price',
    label: 'Fiyat',
    type: 'text',
    placeholder: 'Örn: 1150.75',
    description: 'Küsüratlı sayılar için nokta kullanınız.',
  },
  {
    name: 'pages',
    label: 'Sayfa Sayısı',
    type: 'text',
    placeholder: 'Örn: 200',
    description: 'Sayfa sayısı sadece rakamlardan oluşmalıdır.',
  },
  {
    name: 'thickness',
    label: 'Kalınlık(mm)',
    type: 'text',
    placeholder: 'Örn: 3,2',
    description: 'Küsüratlı sayılar için virgül kullanınız.',
  },
  {
    name: 'dimension',
    label: 'Ebat(cm)',
    type: 'text',
    placeholder: 'Örn: 13*19,5',
    description: 'Sayı, yıldız ve virgül kabul edilmektedir.',
  },
  {
    name: 'lastNo',
    label: 'Son Baskı Numarası',
    type: 'number',
    placeholder: 'Örn: 8',
    description: 'Son Baskı Numarasını sadece rakamlardan oluşmalıdır.',
  },
  {
    name: 'firstDate',
    label: 'İlk Baskı Tarihi',
    type: 'number',
    placeholder: 'Örn: 2023',
    description: 'İlk Baskı Tarihi sadece rakamlardan oluşmalıdır.',
  },
  {
    name: 'lastDate',
    label: 'Son Baskı Tarihi',
    type: 'text',
    placeholder: 'Örn: Mayıs 2023',
    description: 'Son Baskı Tarihi ay yıl olucak şekilde olmalıdır.',
  },
  {
    name: 'isbn',
    label: 'ISBN',
    type: 'text',
    placeholder: 'Örn: 118-115-11440-3-1',
    description: 'Sayı ve orta çizgi kabul edilmektedir.',
  },
]
