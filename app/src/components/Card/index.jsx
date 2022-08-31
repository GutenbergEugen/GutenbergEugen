import React from 'react'
import s from './style.module.sass';


export default function index({id, name, avatar, status, del, doubleclick}) {
  const nameDoubleClick = status ? name : '*** ***';
  const avatarDoubleClick = status ? avatar : '../../media/no_face.png';


  return (
    <div className={s.user} onDoubleClick={() => doubleclick(id)}>
        <img src={avatarDoubleClick} className={s.photo}/>
        <p className={s.name}>{nameDoubleClick}</p>
        <button className={s.button} onClick={()=>del(id)}>Удалить</button>
    </div>
  )
}