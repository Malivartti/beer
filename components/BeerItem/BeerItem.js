import React from 'react'
import Link from 'next/link';
import s from "./BeerItem.module.sass";

const BeerItem = ({beer}) => {
  return (
    <Link href={`/beers/${beer.id}`}>
      <a className={s.item}>
        <div className={s.image}>
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <div className={s.content}>
          <h2 className={s.title}>{beer.name}</h2>
          <p className={s.descr}>{beer.description.slice(0, 140) + '...'}</p>
        </div>
      </a>
    </Link>
  )
}

export default BeerItem