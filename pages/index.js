
import { useState } from 'react'
import { getCardsByPage } from '../api';
import BeerItem from '../components/BeerItem/BeerItem';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';
import s from "../styles/index.module.sass";

const Index = ({ beerCards }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState(beerCards)

  return (
    <div className={s.app}>
      <div className='container'>
        <h1>Beers</h1>
        <Search
          setCards={setCards}
          currentPage={currentPage} />
        <div className={s.list}>
          {cards.length
            ? cards.map(beer =>
              <BeerItem
                beer={beer}
                key={beer.id}
              />)
            : <h2>Ничего не найдено</h2>
          }
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setCards={setCards} />
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const beerCards = await getCardsByPage(1)

  return {
    props: { beerCards },
  }
}


export default Index