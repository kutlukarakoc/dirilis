import SearchBooks from './search'
import Clear from './clear'
import Categories from './categories/desktop'
import MobileCategories from './categories/mobile/'

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
