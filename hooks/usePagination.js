import { useMemo } from 'react';

export function usePagination(totalPages) {
  const pages = Math.ceil(totalPages)
  const pagesArray = useMemo(() => {
    let array = [];
    for (let i = 0; i < pages; i++) {
      array.push(i + 1)
    }
    return array
  }, [pages])

  return pagesArray
}
