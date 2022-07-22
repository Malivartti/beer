import { useEffect, useState } from 'react'
import { getCardsByPage } from '../../api';
import s from './Search.module.sass'

const Search = ({ setCards, currentPage }) => {
  const [name, setName] = useState('');

  async function handleSearch(e) {
    setName(e.target.value.trim())
  }

  useEffect(() => {
    async function getCards() {
      const response = await fetch('https://api.punkapi.com/v2/beers?beer_name=' + name);
      const data = await response.json()
      setCards(data)
    }
    if (name) {
      getCards()
    } else {
      getCardsByPage(currentPage)
      .then((beerCards) => setCards(beerCards))
    }
  }, [name])

  return (
    <input
      className={s.input}
      type='text'
      value={name}
      onChange={handleSearch}
      placeholder='Поиск по имени' />
  )
}

export default Search