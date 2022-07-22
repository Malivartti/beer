import { useEffect } from 'react'
import s from "./Pagination.module.sass";
import { usePagination } from '../../hooks/usePagination';
import { getCardsByPage } from '../../api';

const totalPages = 325 / 24;

const Pagination = ({ currentPage, setCurrentPage, setCards }) => {
  const pagesArray = usePagination(totalPages)

  useEffect(() => {
    getCardsByPage(currentPage)
      .then((beerCards) => setCards(beerCards))
  }, [currentPage])

  return (
    <div className={s.list}>
      {pagesArray.map(number =>
        <button
          key={number}
          href={'/beer/' + number}
          className={currentPage === number
            ? [s.btn, s.active, 'btn-reset'].join(' ')
            : [s.btn, 'btn-reset'].join(' ')}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>)}
    </div>
  )
}

export default Pagination