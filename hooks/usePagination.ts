import { useCallback, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const usePagination = (count: number, limit: number) => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page') || '1')
  const totalPages = Math.ceil(count / limit)

  const createQueryString = useCallback(
    (name: string, value: string): string => {
      const params: URLSearchParams = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  const prevPage = (): string =>
    pathname + '?' + createQueryString('page', (page - 1).toString())

  const nextPage = (): string =>
    pathname + '?' + createQueryString('page', (page + 1).toString())

  const clickedPage = (index: number): string =>
    pathname + '?' + createQueryString('page', (index + 1).toString())

  useEffect(() => {
    if (page > totalPages)
      replace(pathname + '?' + createQueryString('page', '1'))
  }, [searchParams])

  return [page, totalPages, prevPage, nextPage, clickedPage] as const
}

export default usePagination
