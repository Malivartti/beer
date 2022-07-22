import Link from 'next/link';
import React from 'react'
import s from "../../styles/beer.module.sass";

const Beer = ({ beer }) => {
  return (
    <div className='container'>
      <Link href='/'><a className={s.link}>Назад</a></Link>
      <div className={s.wrapper}>
        <div className={s.image}>
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <div className={s.content}>
          <h1 className={s.title}>{beer.name}</h1>
          <div className={s.tabline}>{beer.tagline}</div>
          <p>{beer.description}</p>
          <p>abv {beer.abv}</p>
          <ul>
            {beer.food_pairing.map(food =>
              <li>{food}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`);
  const beer = await response.json();

  return {
    props: { beer: beer[0] },
  }
}

export default Beer