import React from 'react';
import Card from '../Card';
import s from './style.module.sass';

export default function index({cards, del, doubleclick}) {

  return (
    <div className = {s.container}>
        {
          cards.map(elem => <Card key={elem.id} del={del} doubleclick={doubleclick} {...elem}/>)
        }
    </div>
  )
}
