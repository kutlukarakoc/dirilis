import { useCallback, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Pagination = [
  number,
  number,
  () => string,
  () => string,
  (index: number) => string,
]

const usePagination = (count: number, limit: number): Pagination => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page') || '1')
  const totalPages = Math.ceil(count / limit)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  const prevPage = () =>
    pathname + '?' + createQueryString('page', (page - 1).toString())

  const nextPage = () =>
    pathname + '?' + createQueryString('page', (page + 1).toString())

  const clickedPage = (index: number) =>
    pathname + '?' + createQueryString('page', (index + 1).toString())

  useEffect(() => {
    if (page > totalPages)
      replace(pathname + '?' + createQueryString('page', '1'))
  }, [searchParams])

  return [page, totalPages, prevPage, nextPage, clickedPage]
}

export default usePagination
