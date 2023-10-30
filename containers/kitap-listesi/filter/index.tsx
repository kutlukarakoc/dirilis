import SearchBooks from './search'
import Clear from './clear'
import Categories from './categories/desktop'
import MobileCategories from './categories/mobile/mobile'

// Shallow Routing kullanılcak https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating#shallow-routing

const Filter = () => {
  return (
    <section>
      <div className="flex w-full items-center space-x-2">
        <SearchBooks />
        <Clear />
      </div>
			<Categories />
			<MobileCategories />
    </section>
  )
}

export default Filter
