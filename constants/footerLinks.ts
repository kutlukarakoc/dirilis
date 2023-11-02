import { externalNavLinks } from './externalLinks'

export const footerLinks = [
  {
    title: 'Hızlı Erişim',
    external: false,
    links: [
      {
        title: 'Kitap Listesi',
        url: '/kitap-listesi?page=1',
      },
      {
        title: 'İletişim',
        url: '/iletisim',
      },
			{
				title: 'Tarihçe',
				url: '/tarihce'
			},
			{
				title: 'Biyografi',
				url: '/biyografi'
			}
    ],
  },
  {
    title: 'Diğer Sitelerimiz',
    external: true,
    links: externalNavLinks,
  },
]
