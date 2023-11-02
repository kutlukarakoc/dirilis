const Pagination = () => {

  return (
    <nav aria-label="listing-pagination" className="flex justify-center items-center mt-20">
      <ul className="inline-flex -space-x-px text-paragraph">
        <li>
          <a
            href="#"
            className="bg-white-50 ml-0 flex h-8 items-center justify-center rounded-l-lg border border-gray-300 px-3 leading-tight text-gray-500 hover:bg-gray-100"
          >
            Geri
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-white-50 flex h-8 items-center justify-center border border-gray-300 px-3 leading-tight text-gray-500 hover:bg-gray-100"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-white-50 flex h-8 items-center justify-center border border-gray-300 px-3 leading-tight text-gray-500 hover:bg-gray-100"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="bg-white-50 flex h-8 items-center justify-center border border-gray-300 px-3 leading-tight text-gray-500 hover:bg-gray-100"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-white-50 flex h-8 items-center justify-center border border-gray-300 px-3 leading-tight text-gray-500 hover:bg-gray-100"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-white-50 flex h-8 items-center justify-center border border-gray-300 px-3 leading-tight text-gray-500 hover:bg-gray-100"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-white-50 flex h-8 items-center justify-center rounded-r-lg border border-gray-300 px-3 leading-tight text-gray-500 hover:bg-gray-100"
          >
            İleri
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination